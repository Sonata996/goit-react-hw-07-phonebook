import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'



export const contactSlice = createSlice({
    name:'contact',
    initialState: [
          {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
          {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
          {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
          {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
        ],
    reducers:{
        addContact(state,action){
            state.push({id:nanoid(), name:action.payload.name, number:action.payload.number})
            },
        removeContact(state,action){
             return state.filter(elem => elem.id !== action.payload)
        }
        
    }
})

export const getContact = state => state.contacts
export const contactsReducer = contactSlice.reducer
export const {addContact, removeContact} = contactSlice.actions;