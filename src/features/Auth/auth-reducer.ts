import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';

export const signUp = createAsyncThunk<any, LoginParamsType, any>(
    'auth/signUp',
    async (param: LoginParamsType, thunkAPI) => {
        try {
            const res = await authAPI.login(param)
            return {value: true}
        } catch (err) {

        }
    })

export const login = createAsyncThunk<any, LoginParamsType, any>(
    'auth/login',
    async (param: LoginParamsType, thunkAPI) => {
        try {
            const res = await authAPI.login(param)
            return {value: true}
        } catch (err) {

        }
    })

export const authMe = createAsyncThunk<any, any, any>('auth/authMe',
    async (param, thunkAPI) => {
        try {
            const res = await authAPI.authMe()
            return {value: true}
        } catch (err) {

        }
    })

export const logOut = createAsyncThunk<any, any, any>('auth/logOut', async () => {
    try {
        const res = await authAPI.logout()
    } catch (err) {

    }
})


const initialState = {
    isSignUp: false,
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<PayloadActionType>) {
            state.isLoggedIn = action.payload.value
        },
        setIsRegister(state, action: PayloadAction<PayloadActionType>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(signUp.fulfilled, (state,action) => {
            state.isSignUp = action.payload.value
        })

        builder.addCase(login.fulfilled, (state,action) => {
            state.isLoggedIn =  action.payload.value
        })

        builder.addCase(authMe.fulfilled, (state,action) => {
            state.isLoggedIn =  action.payload.value
            state.isSignUp = action.payload.value
        })

    }
})

export const authReducer = slice.reducer
export const {setIsLoggedIn, setIsRegister} = slice.actions;

//types
type PayloadActionType = {value: boolean}