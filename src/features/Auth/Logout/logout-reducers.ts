import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus, setInfo} from '../../../app/app-reducer';
import {AxiosError} from 'axios';
import { setIsAuthorized } from '../Profile/profile-reducer';
import { authAPI } from '../../../api/auth-api';

export const logOut = createAsyncThunk('auth/logOut',
    async (param, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.logout()
            console.log(res.info)
            dispatch(setInfo({info: res.info}))
            dispatch(setIsAuthorized({value: false}))
            dispatch(setAppStatus({status: 'succeeded'}))
            return {isLogOut: true}
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
    name: 'logout',
    initialState: {
        isLogOut: false
    } as InitType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(logOut.fulfilled,
            (state, action: PayloadAction<InitType>) => {
             state.isLogOut = action.payload.isLogOut
        })
    }
})

export const logoutReducer = slice.reducer

//types
type InitType = {
    isLogOut: boolean
}