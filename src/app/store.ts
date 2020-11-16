import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from '../features/Auth/auth-reducer';
import {useDispatch} from 'react-redux';
import {appReducer} from './app-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppDispatchType  = typeof store.dispatch
export const useAppDispatch = () => <AppDispatchType>useDispatch()
export type AppRootStateType = ReturnType<typeof rootReducer>