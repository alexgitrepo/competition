import React from 'react'
import style from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../validators/validators";
import attention from '../../../assets/warning-speech-bubble.svg'

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <input {...input} {...props}  />
            {hasError && <img className={style.attention} alt='attention' src={attention}/>}
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

