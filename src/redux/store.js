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
    key: 'contact',
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
        return getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })},
})
export const persistor = persistStore(store)