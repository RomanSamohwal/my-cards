import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppStatus} from '../../../app/app-reducer';
import {setIsAuthorized} from '../Profile/profile-reducer';
import {handleError} from '../../../utils/error-util';
import {authAPI} from '../../../api/auth-api';
import {LoginParamsType} from '../../../api/api-types';

export const login = createAsyncThunk<any, LoginParamsType, any>(
    'login/Login',
    async (param: LoginParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            await authAPI.login(param)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            thunkAPI.dispatch(setIsAuthorized({value: true}))
            return {value: true}
        } catch (err) {
            handleError(err,thunkAPI)
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