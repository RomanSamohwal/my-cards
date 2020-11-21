import React from 'react'
import {SetPasswordFormik} from '../../../components/Formik/SetPass';

export const SetPassword = React.memo(() => {
    return <div>
      New Password
        <SetPasswordFormik/>
    </div>
})
