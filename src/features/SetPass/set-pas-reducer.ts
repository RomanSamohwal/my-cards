import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authAPI, LoginParamsType} from '../../api/cards-api';
import {setAppStatus} from '../../app/app-reducer';
import {handleError} from '../../utils/error-util';

export const setNewPass = createAsyncThunk<any, LoginParamsType, any>(
    'set-pass/set-new-password',
    async (param: LoginParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            await authAPI.setNewPassword(param)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {value: true}
        } catch (err) {
            handleError(err, thunkAPI)
        }
    })

const slice = createSlice({
    name: 'set-pass',
    initialState: {
        isSignUp: false
    } as InitType,
    reducers: {

        },
    extraReducers: builder => {
        builder.addCase(setNewPass.fulfilled, (state, action) => {

        })
    }
})

/*export const regReducer = slice.reducer
export const {setIsRegister} = slice.actions;*/

//type
type InitType = {
    isSignUp: boolean
}
