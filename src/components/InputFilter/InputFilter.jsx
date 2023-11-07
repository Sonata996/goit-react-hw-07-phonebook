// import { filter } from "redux/addContact"
import { query } from "redux/filter"
import { ConteinerFilter,InputFilterStyled } from "./inputFilter.styled"
import { useDispatch} from "react-redux"


export const InputFilter = ({tilteInput,onAddFilter}) =>{
    // const listContacts =useSelector(state =>state.contacts.contacts)
    const disPatch = useDispatch()
    return (
        <ConteinerFilter>
                <label htmlFor="filters">{tilteInput}</label>
                <InputFilterStyled 
                    // value={listContacts}
                    name='filters'
                    type="text" 
                    onChange={(value)=> disPatch(query(value.currentTarget.value))}//disPatch(filter(value.target.value))
                    
                    />
            </ConteinerFilter>
    )
}