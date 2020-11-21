import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAppStatus, setInfo} from '../../../app/app-reducer';
import {handleError} from '../../../utils/error-util';
import {authAPI} from '../../../api/auth-api';
import {LoginParamsType} from '../../../api/api-types';

export const setNewPass = createAsyncThunk<any, LoginParamsType, any>(
    'set-pass/set-new-password',
    async (param: LoginParamsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            let res = await authAPI.setNewPassword(param)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            thunkAPI.dispatch(setInfo({info: res.info}))
            return {value: true}
        } catch (err) {
            handleError(err, thunkAPI)
        }
    })