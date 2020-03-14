import React, {useState} from 'react';
import User from "../User/User";
import Paginator from "../common/Paginator/Paginator";

const UsersTable = ({users, totalItems, CurrentPage, portionSize, pageSize, changeCurrentPage}) => {
    const [currentSortField, changeCurrentSortField] = useState("id")
    const [sortDirection, changeSortDirection] = useState("toMax")
    let sortArray = []
    let sortTable = (currentSortField, sortDirection) => {
        if (sortDirection === "toMin") {
            sortArray = [...users].sort((function (a, b) {
                console.log(users)
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
    }
    sortTable(currentSortField, sortDirection)
    console.log(sortArray)
    const usersArray = sortArray.filter((item, i) => (i + 1 <= (CurrentPage * pageSize) && i + 1 > ((CurrentPage - 1) * pageSize))).map((u, i, arr) =>
        <User regNumber={u.id}
              name={u.name}
              date={u.date}
              email={u.email}
              phone={u.phone}
              distance={u.distance}
              payment={u.payment}
              key={u.id}/>)
    return (
        <div>
            <button onClick={() => {
                changeCurrentSortField("id")
                if (sortDirection === "toMax") {
                    changeSortDirection("toMin")
                } else if (sortDirection === "toMin") {
                    changeSortDirection("toMax")
                }
            }}>Номер
            </button>
            <button onClick={() => {
                changeCurrentSortField("payment")
                if (sortDirection === "toMax") {
                    changeSortDirection("toMin")
                } else if (sortDirection === "toMin") {
                    changeSortDirection("toMax")
                }
            }}>взнос
            </button>
            <button onClick={() => {
                changeCurrentSortField("distance")
                if (sortDirection === "toMax") {
                    changeSortDirection("toMin")
                } else if (sortDirection === "toMin") {
                    changeSortDirection("toMax")
                }
            }}>Дистанция
            </button>

            {usersArray}
            {totalItems > 5 ? <Paginator currentPage={CurrentPage} pageSize={pageSize} portionSize={portionSize}
                                         totalItemsCount={totalItems} onPageChange={changeCurrentPage}/> : ""}
        </div>
    )
}
export default UsersTable
