import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../validators/validators";

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                <input {...input} {...props}  />
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}


export const createField = (validationArray, component, name, type, placeholder, props) => {
    return <div>
        <Field validate={[...validationArray]} component={component} name={name} type={type}
               placeholder={placeholder} {...props}/>
    </div>
}


createField([required], Input, "email", "input")

