import { useDispatch} from "react-redux"
import {ContactList,ElemList,DeletButton } from "./contacts.styled"
import { useSelector } from "react-redux";
import { getContact } from "redux/contact";
import { removeContact } from "redux/contact"


export const Contacts = () =>{
const contacts =useSelector(getContact)
const filter = useSelector(state => state.filter);

const contactsList =contacts.filter(elem => elem.name.toLowerCase().includes(filter))

    const disPatch = useDispatch()
    return(
        <div>
            <ContactList> 
               {contactsList.map(elem => <ElemList key={elem.id}>
                <p>
                    {elem.name}: {elem.number}
                </p>
                <DeletButton
                    id={elem.id}

                onClick={()=>{
                    disPatch(removeContact(elem.id))
                }}
                >
                    Delete</DeletButton>
               </ElemList>
                )}
            </ContactList>
        </div>
    )
}