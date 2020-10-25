import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>