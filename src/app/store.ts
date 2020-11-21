import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from 'react-redux';
import {appReducer} from './app-reducer';
import {regReducer} from '../features/Auth/Register/register-reducer';
import {loginReducer} from '../features/Auth/Login/login-reducer';
import { profileReducer } from "../features/Auth/Profile/profile-reducer";
import {logoutReducer} from '../features/Auth/Logout/logout-reducers';

const rootReducer = combineReducers({
    app: appReducer,
    reg: regReducer,
    login: loginReducer,
    logout: logoutReducer,
    profile: profileReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppDispatchType  = typeof store.dispatch
export const useAppDispatch = () => <AppDispatchType>useDispatch()
export type AppRootStateType = ReturnType<typeof rootReducer>