import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {AxiosError} from 'axios';
import {handleError} from '../../utils/error-util';

export const signUp = createAsyncThunk<any, LoginParamsType, any>(
    'auth/signUp',
    async (param: LoginParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            await authAPI.signUp(param)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {value: true}
        } catch (err) {
            handleError(err, thunkAPI)
        }
    })

const slice = createSlice({
    name: 'reg',
    initialState: {
        isSignUp: false
    } as InitType,
    reducers: {
        setIsRegister(state, action: PayloadAction<PayloadActionType>) {
            state.isSignUp = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isSignUp = action.payload.value
        })
    }
})

export const regReducer = slice.reducer
export const {setIsRegister} = slice.actions;

//type
type InitType = {
    isSignUp: boolean
}

type PayloadActionType = { value: boolean }