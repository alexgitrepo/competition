import React from 'react'
import {Field, reduxForm, reset} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {
    dateValid,
    email,
    maxLength40,
    minLength5,
    minPayment,
    required
} from "../../validators/validators";
import {createTextMask} from 'redux-form-input-masks'
import style from './Registration.module.css'

const phoneMask = createTextMask({
    pattern: '+7(999) 999-9999',
});

const Registration = ({addUser}) => {
    const onSubmit = ({date, name, email, phone, distance, payment}) => {
        addUser(date, name, email, phone, +distance, +payment)
    }
    return <div className={style.registrationWrapper}>
        <div className={style.registration}>
            <h2>Заявка на участие в благотворительном забеге</h2>
            <RegistrationFormRedux onSubmit={onSubmit}/>
        </div>
    </div>
}
const registrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.registrationForm}>
            {createField([required, minLength5, maxLength40], Input, "name", "input", "ФИО")}
            {createField([required, dateValid], Input, "date", "date", 'Дата рождения')}
            {createField([required, email], Input, "email", "input", "Email",)}
            {createField([required], Input, "phone", "tel", "phone", {...phoneMask})}
            <div className={style.selectWrapper}>
                <label>Длинна дистанции, км</label>
                <Field name="distance" component="select" validate={[required]}>
                    <option></option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </Field>
            </div>
            {createField([required, minPayment], Input, "payment", "number", "Сумма взноса")}
            <button disabled={props.pristine || props.submitting || props.invalid}>Отправить заявку</button>
            {props.error && <div className={style.summaryError}>
                {props.error}
            </div>}
        </form>
    )
}
const afterSubmit = (result, dispatch) => {
    dispatch(reset('Registration'))
}
const RegistrationFormRedux = reduxForm({form: 'Registration', onSubmitSuccess: afterSubmit})(registrationForm)
export default Registration