import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { contactsReducer} from "./contact";
import { filterReducer } from "./filter";


const persistConfig = {
    key: 'root',
    storage,
  }
  export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    })

const persistedContactsReducer = persistReducer(persistConfig, rootReducer )
    

export const store = configureStore({
reducer: persistedContactsReducer,

middleware(getDefaultMiddleware){
  const defaultsMiddleware =  getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
},
})
    return [...defaultsMiddleware]
  },
})
export const persistor = persistStore(store)