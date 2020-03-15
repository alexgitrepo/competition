import React, {useState} from 'react';
import User from "../User/User";
import Paginator from "../common/Paginator/Paginator";
import style from './UsersTable.module.css'
import arrowUp from '../../assets/up-arrow.svg'
import arrowDown from '../../assets/down-arrow.svg'


const UsersTable = ({users, totalItems, CurrentPage, portionSize, pageSize, changeCurrentPage}) => {
    const [currentSortField, changeCurrentSortField] = useState("id")
    const [sortDirection, changeSortDirection] = useState("toMax")
    let sortTable = (currentSortField, sortDirection) => {
        let sortArray = []
        if (sortDirection === "toMin") {
            sortArray = [...users].sort((function (a, b) {
                if (a[currentSortField] < b[currentSortField]) {
                    return 1;
                }
                if (a[currentSortField] > b[currentSortField]) {
                    return -1;
                }
                return 0;
            }))
        }
        if (sortDirection === "toMax") {
            sortArray = [...users].sort((function (a, b) {
                if (a[currentSortField] > b[currentSortField]) {
                    return 1;
                }
                if (a[currentSortField] < b[currentSortField]) {
                    return -1;
                }
                return 0;
            }))
        }
        return sortArray
    }
    const usersArray = sortTable(currentSortField, sortDirection).filter((item, i) => (i + 1 <= (CurrentPage * pageSize) && i + 1 > ((CurrentPage - 1) * pageSize))).map(u =>
        <User regNumber={u.id}
              name={u.name}
              date={u.date}
              email={u.email}
              phone={u.phone}
              distance={u.distance}
              payment={u.payment}
              key={u.id}/>)
    return (
        <div className={style.UsersTableWrapper}>
            <h2>Список участников</h2>
            <div className={style.sortButtonsWrapper}>
                <span>Сортировать по:</span>
                <button className={currentSortField === "id" ? style.active : ""} onClick={() => {
                    changeCurrentSortField("id")
                    if (sortDirection === "toMax") {
                        changeSortDirection("toMin")
                    } else if (sortDirection === "toMin") {
                        changeSortDirection("toMax")
                    }
                }}>Дата регистрации
                    {(currentSortField === "id" && sortDirection === "toMax") ? <img src={arrowUp}/> : ''}
                    {(currentSortField === "id" && sortDirection === "toMin") ? <img src={arrowDown}/> : ''}
                </button>
                <button className={currentSortField === "distance" ? style.active : ""} onClick={() => {
                    changeCurrentSortField("distance")
                    if (sortDirection === "toMax") {
                        changeSortDirection("toMin")
                    } else if (sortDirection === "toMin") {
                        changeSortDirection("toMax")
                    }
                }}>Дистанция
                    {(currentSortField === "distance" && sortDirection === "toMax") ? <img src={arrowUp}/> : ''}
                    {(currentSortField === "distance" && sortDirection === "toMin") ? <img src={arrowDown}/> : ''}
                </button>
                <button className={currentSortField === "payment" ? style.active : ""} onClick={() => {
                    changeCurrentSortField("payment")
                    if (sortDirection === "toMax") {
                        changeSortDirection("toMin")
                    } else if (sortDirection === "toMin") {
                        changeSortDirection("toMax")
                    }
                }}>Взнос
                    {(currentSortField === "payment" && sortDirection === "toMax") ? <img src={arrowUp}/> : ''}
                    {(currentSortField === "payment" && sortDirection === "toMin") ? <img src={arrowDown}/> : ''}
                </button>
            </div>
            <div className={style.titleWrapper}>
                <span className={style.regNumber}>№</span><span className={style.name}>ФИО участника</span><span
                className={style.date}>Дата рождения</span><span className={style.email}>Адрес e-mail</span><span
                className={style.phone}>Номер телефона</span><span
                className={style.distance}>Дистанция</span><span
                className={style.payment}>Взнос</span>
            </div>
            {usersArray}
            {totalItems > 5 ? <Paginator currentPage={CurrentPage} pageSize={pageSize} portionSize={portionSize}
                                         totalItemsCount={totalItems} onPageChange={changeCurrentPage}/> : ""}
        </div>
    )
}
export default UsersTable
