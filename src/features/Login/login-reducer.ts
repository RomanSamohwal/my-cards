import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {AxiosError} from 'axios';
import {setIsAuthorized} from '../Profile/profile-reducer';

export const login = createAsyncThunk<any, LoginParamsType, any>(
    'login/Login',
    async (param: LoginParamsType, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            await authAPI.login(param)
            dispatch(setAppStatus({status: 'succeeded'}))
            dispatch(setIsAuthorized({value: true}))
            return {value: true}
        } catch (err) {
            const error: AxiosError = err;
            dispatch(setAppStatus({status: 'failed'}))
            if (error.response?.data.error) {
                dispatch(setAppError({error: error.response.data.error}))
                return rejectWithValue({error: error.response.data.error})
            } else {
                dispatch(setAppError({error: error.message}))
                return rejectWithValue({error: error.message})
            }
        }
    })

const slice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false
    } as InitType,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<PayloadActionType>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload.value
        })
    }
})

export const loginReducer = slice.reducer
export const {setIsLoggedIn} = slice.actions;


//types
type InitType = {
    isLoggedIn: boolean
}

export type PayloadActionType = { value: boolean}