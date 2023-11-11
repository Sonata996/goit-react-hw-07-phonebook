import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contact";
import { filterReducer } from "./filter";


export const store = configureStore({
reducer:{
  contacts: contactsReducer,
    filter: filterReducer,
  },
})
