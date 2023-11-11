import { useDispatch} from "react-redux"
import {ContactList,ElemList,DeletButton } from "./contacts.styled"
import { useSelector } from "react-redux";
import { getContact, getFilter } from "redux/selectors";
import { serviceDeletContact } from "serviceApi/serviceApi";


export const Contacts = () =>{
const contacts =useSelector(getContact)
const filter = useSelector(getFilter);
const contactsList =contacts.filter(elem => elem && elem.name.toLowerCase().includes(filter))


    const disPatch = useDispatch()
    return(
        <div>
            <ContactList> 
               {contactsList.map(elem => <ElemList key={elem.id}>
                <div>
                    <p>
                        {elem.name}: 
                    </p>
                    <p>
                        {elem.phone}
                    </p>
                </div>
                <DeletButton
                    id={elem.id}

                onClick={()=>{
                    disPatch(serviceDeletContact(elem.id))
                }}
                >
                    Delete</DeletButton>
               </ElemList>
                )}
            </ContactList>
        </div>
    )
}