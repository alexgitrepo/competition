export const required = value => value ? undefined : "field is required"

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength5 = minLength(5)

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength40 = maxLength(40)

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
export const minPayment =  value =>
    value<=0? 'Pay something!!!' : undefined

export const dateValid = (value) => {
    let dateObj = new Date()
    let year = dateObj.getFullYear()
    let formDate =value.split("-")
    return formDate[0]<year && formDate[0]>1900?
        undefined :'wrongDate' }