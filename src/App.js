import React from 'react';
import './App.css';
import {addUser, changeCurrentPage} from "./redux/app-reducer";
import {connect} from "react-redux";
import Registration from "./components/Registration/Registration";
import UsersTable from "./components/UsersTable/UsersTable";

const App = () => {
    return (
        <div className="App">
            <RegistrationContainer/>
            <UsersTableContainer/>
        </div>
    );
}
let mapStateToPropsUsersTable = (state) => {
    return {
        users: state.app.users,
        totalItems: state.app.currentUserId,
        CurrentPage: state.app.CurrentPage,
        portionSize: state.app.portionSize,
        pageSize: state.app.pageSize
    }
}
let mapDispatchToPropsUsersTable = (dispatch) => {
    return {
        changeCurrentPage: (page) => {
            dispatch(changeCurrentPage(page))
        }
    }
}

let mapDispatchToPropsRegistration = (dispatch) => {
    return {
        addUser: (date, name, email, phone, distance, payment) => {
            dispatch(addUser(date, name, email, phone, distance, payment))
        }
    }
}
let RegistrationContainer = connect(null, mapDispatchToPropsRegistration)(Registration)
let UsersTableContainer = connect(mapStateToPropsUsersTable, mapDispatchToPropsUsersTable)(UsersTable)


export default App;
