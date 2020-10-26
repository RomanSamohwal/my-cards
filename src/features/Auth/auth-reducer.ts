import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';
import {setAppStatus} from '../../app/app-reducer'

export const signUp = createAsyncThunk<any, LoginParamsType, any>(
    'auth/signUp',
    async (param: LoginParamsType, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.signUp(param)
            dispatch(setAppStatus({status: 'succeeded'}))
            return {value: true}
        } catch (err) {
            dispatch(setAppStatus({status: 'failed'}))
            return rejectWithValue(err.response.data.error)
        }
    })

export const login = createAsyncThunk<any, LoginParamsType, any>(
    'auth/login',
    async (param: LoginParamsType, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.login(param)
            dispatch(setAppStatus({status: 'succeeded'}))
            return {value: true}
        } catch (err) {
            dispatch(setAppStatus({status: 'failed'}))
            return rejectWithValue(err.response.data.error)
        }
    })

export const logOut = createAsyncThunk('auth/logOut',
    async (param, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.logout()
            dispatch(setAppStatus({status: 'succeeded'}))
        } catch (err) {
            dispatch(setAppStatus({status: 'failed'}))
            return rejectWithValue(err.response.data.error)
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
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isSignUp = action.payload.value
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload.value
        })
    }
})

export const authReducer = slice.reducer
export const {setIsLoggedIn, setIsRegister} = slice.actions;

//types
type PayloadActionType = { value: boolean }