import {AppRootStateType} from './../store';

export const selectStatus = ( state: AppRootStateType) => state.app.status
export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized
export const userId = (state: AppRootStateType) => state.profile.user._id
export const isAuthorized = (state: AppRootStateType) => state.profile.isAuthorized
export const isLogin = (state: AppRootStateType ) => state.login.isLoggedIn
export const isLogOut = (state: AppRootStateType) => state.logout.isLogOut