import { createSlice } from '@reduxjs/toolkit'
import { serviceGetContactsApi, servicePostContact, serviceDeletContact } from 'serviceApi/serviceApi'


export const contactSlice = createSlice({
    name:'contact',
    initialState: {
        items: [],
        isLoading: false,
        error: null
      },
    extraReducers: (builder) => {
        builder
        .addCase(serviceGetContactsApi.pending,(state,action)=>{
            state.isLoading = true;

        })
        .addCase(serviceGetContactsApi.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.error = null
                state.items = action.payload;
            })
            .addCase(serviceGetContactsApi.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })

            
        builder
        .addCase(servicePostContact.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(servicePostContact.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.error = null
                state.items = [...state.items,action.payload]
        })
          .addCase(servicePostContact.rejected,(state,action)=>{
              console.log(action);
              state.isLoading = false;
              state.error = action.payload;
          })


          builder.addCase(serviceDeletContact.pending,(state,action)=>{
                state.isLoading = true;
            })
            .addCase(serviceDeletContact.fulfilled,(state,action)=>{
                state.isLoading = false
                state.error = null
                state.items = state.items.filter(elem => elem.id !== action.payload.id)
            })
            .addCase(serviceDeletContact.rejected,(state,action) =>{
                state.error = action.payload;
            })
    }
    // extraReducers:{
    //     [serviceGetContactsApi.pending](state,action){
    //         state.isLoading = true;
    //     },
    //     [serviceGetContactsApi.fulfilled](state,action){
    //         state.isLoading = false;
    //         state.error = null
    //         state.items = action.payload;
    //     },
    //     [serviceGetContactsApi.rejected](state,action){
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     [servicePostContact.pending](state,action) {
    //         state.isLoading = true;
    //     },
    //     [servicePostContact.fulfilled](state,action) {
    //         state.isLoading = false;
    //         state.error = null
    //         state.items = [...state.items,action.payload]
    //     },
    //     [servicePostContact.rejected](state,action) {
    //         // console.log(action);
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     [serviceDeletContact.pending](state,action) {
    //         state.isLoading = true;
    //     },
    //     [serviceDeletContact.fulfilled](state,action) {
    //         state.isLoading = false;
    //         state.error = null
    //         state.items = state.items.filter(elem => elem.id !== action.payload.id)
    //     },
    //     [serviceDeletContact.rejected](state,action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
        
    // }
    
})


export const contactsReducer = contactSlice.reducer
export const {addContact, removeContact} = contactSlice.actions;

