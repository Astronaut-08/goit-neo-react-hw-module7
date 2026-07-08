// файл створення стору
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import contactsSlice from './contactsSlice'
import filtersSlice from './filtersSlice'

 // Кастомний сторедж
const storage = {
    getItem: (el) => Promise.resolve(localStorage.getItem(el)),
    setItem: (el, item) => Promise.resolve(localStorage.setItem(el, item)),
    removeItem: (el) => Promise.resolve(localStorage.removeItem(el))
}

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filters: filtersSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)
