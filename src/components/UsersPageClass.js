import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {getUsersStatisticThunk, getUserThunk, getWeeklyStatisticThunk} from "../redux/actions";
import ViewsContainer from "./ViewsContainer";
import ClicksContainer from "./ClicksContainer";
import Header from "./Header";
import Footer from "./Footer";
import * as PropTypes from "prop-types";

class UsersPage extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserThunk(userId)
        this.props.getUsersStatisticThunk()
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.usersStatistic !== this.props.usersStatistic) {
    //         let userId = this.props.match.params.userId
    //         this.props.getWeeklyStatisticThunk(userId)
    //     }
    // }

    render() {
        let {user, usersStatistic, getUserThunk, getUsersStatisticThunk, getWeeklyStatisticThunk, weeklyDates, weeklyClicks, weeklyViews, ...props} = this.props;

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
                        <p>{`${user.first_name} ${user.last_name}`}</p>
                        <div>
                            <ClicksContainer user={user}
                                             usersStatistic={usersStatistic}
                                             weeklyDates={weeklyDates}
                                             weeklyClicks={weeklyClicks}
                            />
                        </div>
                        <div>
                            <ViewsContainer user={user}
                                            usersStatistic={usersStatistic}
                                            weeklyDates={weeklyDates}
                                            weeklyViews={weeklyViews}
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

UsersPage.propTypes = {
    user: PropTypes.any,
    usersStatistic: PropTypes.any,
    getUserThunk: PropTypes.any,
    getUsersStatisticThunk: PropTypes.any,
    getWeeklyStatisticThunk: PropTypes.any,
    weeklyDates: PropTypes.any,
    weeklyClicks: PropTypes.any,
    weeklyViews: PropTypes.any
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    usersStatistic: state.users.usersStatistic,
    weeklyDates: state.users.weeklyDates,
    weeklyClicks: state.users.weeklyClicks,
    weeklyViews: state.users.weeklyViews
})

export default compose(
    connect(mapStateToProps, {getUserThunk, getUsersStatisticThunk, getWeeklyStatisticThunk}),
    withRouter
)(UsersPage)
