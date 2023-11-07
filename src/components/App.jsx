import { InputName } from "./InputName/InputName";
import { Contacts } from "./Contacts/Contacts";
import { InputFilter } from "./InputFilter/InputFilter";





export const App = () =>{

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
            </div>
          );

}
