import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {authAPI} from '../../api/cards-api';
import {AxiosError} from 'axios';
import {ProfileInitState} from './ProfileInitState';
import {PayloadActionType} from '../Login/login-reducer';

export const initializedAp = createAsyncThunk(
    'app/initializeApp',
    async (param, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            let res = await authAPI.authMe()
            dispatch(setAppStatus({status: 'succeeded'}))
            dispatch(setIsAuthorized({value: true}))
            console.log(res)
            return {res: res}
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
    reducers: {
        setIsAuthorized(state, action: PayloadAction<PayloadActionType>) {
            state.isAuthorized  = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(initializedAp.fulfilled, (state, action) => {
                state.user = action.payload.res
        })
    }
})


export const {setIsAuthorized} = slice.actions;
export const profileReducer = slice.reducer
