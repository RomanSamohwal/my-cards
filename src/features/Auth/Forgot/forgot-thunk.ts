import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAppStatus, setInfo} from '../../../app/app-reducer';
import {handleError} from '../../../utils/error-util';
import {authAPI} from '../../../api/auth-api';

export const forgot = createAsyncThunk<any, string, any>(
    'forgot/Forgot',
    async (email, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            const res =  await authAPI.forgot(email)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            thunkAPI.dispatch(setInfo({info: res.info}))
        } catch (err) {
            handleError(err, thunkAPI)
        }
    })


