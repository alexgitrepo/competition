const ADD_USER = "app/ADD_USER";
const CHANGE_CURRENT_PAGE = "app/CHANGE_CURRENT_PAGE";


let initialState = {
    users: [
        {
            id: 1,
            date: "11.03.1987",
            name: "Куклина Мария Ивановна",
            email: "kyklina@mail.ru",
            phone: "+79223625999",
            distance: 5,
            payment: 500
        },
        {
            id: 2,
            date: "8.05.1997",
            name: "Мокрушина Галина Юрьевна",
            email: "mokrushina@mail.ru",
            phone: "+79881125999",
            distance: 10,
            payment: 300
        },
        {
            id: 3,
            date: "24.01.1886",
            name: "Ольга Сергеевна Заводская",
            email: "olga.zavodckaia@mail.ru",
            phone: "+79008011000",
            distance: 3,
            payment: 1500
        },
        {
            id: 4,
            date: "11.03.1987",
            name: "Куклина Мария Ивановна",
            email: "kyklina@mail.ru",
            phone: "+79223625999",
            distance: 5,
            payment: 500
        },
        {
            id: 5,
            date: "8.05.1997",
            name: "Мокрушина Галина Юрьевна",
            email: "mokrushina@mail.ru",
            phone: "+79881125999",
            distance: 10,
            payment: 300
        },
        {
            id: 6,
            date: "24.01.1886",
            name: "Ольга Сергеевна Заводская",
            email: "olga.zavodckaia@mail.ru",
            phone: "+79008011000",
            distance: 3,
            payment: 1500
        }
    ],
    currentUserId: 6,
    CurrentPage: 1,
    pageSize: 5,
    portionSize: 3
}
let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const newCurrentId = state.currentUserId + 1
            const phoneWith7 = `+7${action.phone}`
            const corrDataArr = action.date.split('-')
            const corrData = [...corrDataArr].reverse().join('.')
            return {
                ...state, currentUserId: newCurrentId, users: [...state.users, {
                    id: newCurrentId,
                    date: corrData,
                    name: action.name,
                    email: action.email,
                    phone: phoneWith7,
                    distance: action.distance,
                    payment: action.payment
                }]
            }

        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,CurrentPage:action.page
            }
        }
        default:
            return state
    }
}

export const addUser = (date, name, email, phone, distance, payment) => ({
    type: ADD_USER,
    date,
    name,
    email,
    phone,
    distance,
    payment
})
export const changeCurrentPage = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page
})

export default appReducer

