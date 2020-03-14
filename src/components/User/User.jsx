import React from 'react';
import style from "./User.module.css"

const User = ({name, date, email, phone, distance, payment, regNumber}) => {
    return (
        <div className={style.userWrapper}>
            <span className={style.regNumber}>{regNumber}</span><span className={style.name}>{name}</span><span
            className={style.date}>{date}</span><span className={style.email}>{email}</span><span
            className={style.phone}>{phone}</span><span
            className={style.distance}>{distance}</span><span className={style.payment}>{payment}</span>
        </div>
    )
}
export default User