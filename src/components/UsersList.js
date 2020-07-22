import React, {useEffect} from 'react';
import User from "./User";
import {connect} from "react-redux";
import {getUserCountThunk, getUsersStatisticThunk, getUsersThunk, getWeeklyStatisticThunk} from "../redux/actions";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination";
import Header from "./Header";
import Footer from "./Footer";

const UsersList = ({users, usersStatistic, usersCount, pageSize, getUsersThunk, getUsersStatisticThunk, getWeeklyStatisticThunk, getUserCountThunk}) => {

    useEffect(() => {
        getUsersThunk(pageSize)
        getUsersStatisticThunk()
        getUserCountThunk()
    }, [])

    const onChangedPage = (currentPage) => {
        getUsersThunk(pageSize, currentPage)
    }

    return (
        <div className={"wrapper"}>
            <Header/>
            <div className={"container"}>
                <div className={"content"}>
                    <nav className={"nav"}>
                        <div className={"nav__el"}>
                            <NavLink exact to={'/'} activeClassName={"active"}>Main page ></NavLink>
                        </div>
                        <div className={"nav__el"}>
                            <NavLink exact to={'/users'} activeClassName={"active"}>User statistics</NavLink>
                        </div>
                    </nav>
                    <h2>Users Statistics</h2>
                    <div className={"userList"}>
                        <div className={"userList__title"}>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Id</div>
                            </div>
                            <div className={"filled"}>
                                    <div className={"userList__title_el position"}>First name</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Last name</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Email</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Gender</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>IP address</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Total clicks</div>
                            </div>
                            <div className={"filled"}>
                                <div className={"userList__title_el position"}>Total page views</div>
                            </div>
                        </div>
                        {users.map(u => <User user={u}
                                              usersStatistic={usersStatistic}
                                              getWeeklyStatisticThunk={getWeeklyStatisticThunk}
                                              key={u.id}
                        />)}
                    </div>
                    <div>
                    <Pagination usersCount={usersCount}
                                pageSize={pageSize}
                                portionSize={10}
                                onChangedPage={onChangedPage}
                    />
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    usersStatistic: state.users.usersStatistic,
    usersCount: state.users.usersCount,
    pageSize: state.users.pageSize

})

export default connect(mapStateToProps, {
    getUsersThunk,
    getUsersStatisticThunk,
    getWeeklyStatisticThunk,
    getUserCountThunk
})(UsersList)