import React from 'react';
import {useFormik} from 'formik';

export const Formik = React.memo((props: any) => {
    const formik = useFormik({
        validate: props.validate,
        initialValues: props.initialValues,
        onSubmit: props.onSubmit
    })
    let inputs = props.inputDates.map((i: InputDateType, index: any) => {
        let value
        switch (i.name) {
            case formik.values.email: {
                value = formik.values.email
                break;
            }
            case formik.values.password: {
                value = formik.values.password
                break;
            }
        }
        return <div key={i.key + index}>
            <input
                id={i.id}
                name={i.name}
                type={i.type}
                onChange={formik.handleChange}
                value={value}/>
            {i.name === 'email' && <div>{formik.errors.email ? <div>{formik.errors.email}</div> : null}</div>}
            {i.name === 'password' && <div>{formik.errors.password ? <div>{formik.errors.password}</div> : null}</div>}

        </div>

    })
    return <form onSubmit={formik.handleSubmit}>
        {inputs}
        Remember me
        <input type="checkbox" onChange={formik.handleChange} name={"rememberMe"}/>
        <button type="submit">sign up</button>
    </form>
})

//types
type InputDateType = {
    id: string
    name: string
    type: string
    key: string
}
export type InputsType = Array<InputDateType>
export type FormValuesType = {
    email: string,
    password: string,
    password_confirm?: string
    rememberMe?: boolean
}