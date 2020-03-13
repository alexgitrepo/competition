import React, {useState} from 'react'
import style from './Paginator.module.css'

const Paginator = ({totalItemsCount, currentPage, pageSize, onPageChange, portionSize = 5}) => {

    let pages = []
    let [portionNumber, setPortionNumber] = useState(1)
    let totalPagesCount = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }
    let portionsCount = totalPagesCount / portionSize
    let rightPortionBorder = portionNumber * pageSize
    let leftPortionBorder = (portionNumber - 1) * pageSize + 1
    return <div className={style.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages.filter(item => item <= rightPortionBorder && item >= leftPortionBorder).map(item => <button
            className={(item === currentPage) ? style.active : ""}
            onClick={() => {
                onPageChange(item, pageSize)
            }}>{item}</button>)}
        {portionsCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>
}

export default Paginator