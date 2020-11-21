import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppStatus} from '../../../app/app-reducer';
import {ProfileInitState} from './ProfileInitState';
import {PayloadActionType} from '../Login/login-reducer';
import {handleError} from '../../../utils/error-util';
import { authAPI } from '../../../api/auth-api';

export const initializedAp = createAsyncThunk(
    'profile/initializeApp',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            let res = await authAPI.authMe()
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            thunkAPI.dispatch(setIsAuthorized({value: true}))
            return {res: res}
        } catch (err) {
            handleError(err, thunkAPI)
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
            // @ts-ignore
            state.user = action.payload.res
        })
    }
})

export const {setIsAuthorized} = slice.actions;
export const profileReducer = slice.reducer
