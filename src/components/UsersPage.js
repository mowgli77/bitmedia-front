import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {getUsersStatisticThunk, getUserThunk, getWeeklyStatisticThunk} from "../redux/actions";
import ViewsContainer from "./ViewsContainer";
import ClicksContainer from "./ClicksContainer";
import Header from "./Header";
import Footer from "./Footer";

const UsersPage = ({user, usersStatistic, beginDate, endDate, getUserThunk, getUsersStatisticThunk, getWeeklyStatisticThunk, weeklyDates, weeklyClicks, weeklyViews, ...props}) => {

    const userId = props.match.params.userId

    useEffect(() => {
        getUserThunk(userId)
        getUsersStatisticThunk()
    }, [])

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
                            <NavLink exact to={'/users'} activeClassName={"active"}>User statistics ></NavLink>
                        </div>
                        <div className={"nav__el"}>
                            <NavLink
                                to={`/users/statistics/${user.id}`}>{`${user.first_name} ${user.last_name}`}</NavLink>
                        </div>
                    </nav>
                    <h2>{`${user.first_name} ${user.last_name}`}</h2>
                    <div>
                        <ClicksContainer user={user}
                                         usersStatistic={usersStatistic}
                                         weeklyDates={weeklyDates}
                                         weeklyClicks={weeklyClicks}
                                         getWeeklyStatisticThunk={getWeeklyStatisticThunk}
                                         beginDate={beginDate}
                                         endDate={endDate}
                        />
                    </div>
                    <div>
                        <ViewsContainer user={user}
                                        usersStatistic={usersStatistic}
                                        weeklyDates={weeklyDates}
                                        weeklyViews={weeklyViews}
                                        getWeeklyStatisticThunk={getWeeklyStatisticThunk}
                                        beginDate={beginDate}
                                        endDate={endDate}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    usersStatistic: state.users.usersStatistic,
    weeklyDates: state.users.weeklyDates,
    weeklyClicks: state.users.weeklyClicks,
    weeklyViews: state.users.weeklyViews,
    beginDate: state.users.beginDate,
    endDate: state.users.endDate

})

export default compose(
    connect(mapStateToProps, {getUserThunk, getUsersStatisticThunk, getWeeklyStatisticThunk}),
    withRouter
)(UsersPage)