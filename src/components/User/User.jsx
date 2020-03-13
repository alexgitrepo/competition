import React from 'react';
import style from "./User.module.css"

const User = ({name, date, email, phone, distance, payment, regNumber}) => {
    return (
        <div className={style.userWrapper}>
            <span>{regNumber}</span><span>{name}</span><span>{date}</span><span>{email}</span><span>{phone}</span><span>{distance}</span><span>{payment}</span>
        </div>
    )
}
export default User