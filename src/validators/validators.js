export const required = value => value ? undefined : "field is required"
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `max length is ${maxLength}`
    }
    return undefined
}
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined