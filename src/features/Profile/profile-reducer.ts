import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {authAPI} from '../../api/cards-api';
import {AxiosError} from 'axios';
import {ProfileInitState} from './ProfileInitState';

export const initializedAp = createAsyncThunk(
    'app/initializeApp',
    async (param, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            let res = await authAPI.authMe()
            console.log(res)
            dispatch(setAppStatus({status: 'succeeded'}))
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
    name: 'profile',
    initialState: ProfileInitState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(initializedAp.fulfilled, (state) => {
            state.isLoggedIn = true
        })
    }
})
