import { useDispatch, useSelector } from "react-redux";
import { InputName } from "../InputName/InputName";
import { Contacts } from "../Contacts/Contacts";
import { InputFilter } from "../InputFilter/InputFilter";
import { serviceGetContactsApi } from "serviceApi/serviceApi";
import { ConteinerLoader} from "./App.styled";
import { Loader } from "components/Loader/Loader";
import Notiflix from 'notiflix';
import { getError } from "redux/selectors";





export const App = () =>{
  const error = useSelector(getError)
  const disPatch = useDispatch()
  disPatch(serviceGetContactsApi())
      return (
            <div>
              <h1>Phonebook</h1>

              <InputName 
              />
        
              <h2>Contacts</h2>
        
              <InputFilter 
              tilteInput="Find contacts by name"
              /> 

              <Contacts />

              <ConteinerLoader>
                <Loader/>
              </ConteinerLoader>
              {error && 
              Notiflix.Notify.failure(error)
              }
            </div>
          );

}
