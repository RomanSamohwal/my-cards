import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppStatus} from '../../../app/app-reducer';
import {handleError} from '../../../utils/error-util';
import {authAPI} from '../../../api/auth-api';
import {LoginParamsType} from '../../../api/api-types';

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