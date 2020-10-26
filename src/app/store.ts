import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from '../features/Auth/auth-reducer';

const rootReducer = combineReducers({
  auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>