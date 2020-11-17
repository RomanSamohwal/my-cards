import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {AxiosError} from 'axios';

export const signUp = createAsyncThunk<any, LoginParamsType, any>(
    'auth/signUp',
    async (param: LoginParamsType, {dispatch,
        rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.signUp(param)
            dispatch(setAppStatus({status: 'succeeded'}))
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