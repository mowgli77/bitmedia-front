import React from 'react';
import {NavLink} from "react-router-dom";

const User = ({user, usersStatistic, getWeeklyStatisticThunk}) => {

    const pageViews = usersStatistic.filter(s => s.user_id === user.id).reduce((total, y) => {
        return total + y.page_views
    }, 0)
    const clicks = usersStatistic.filter(s => s.user_id === user.id).reduce((total, y) => {
        return total + y.clicks
    }, 0)

    return (

        <NavLink to={`/users/statistics/${user.id}`}>
            <span onClick={() => getWeeklyStatisticThunk(user.id)}>
                <div className={"user"}>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.id}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.first_name}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.last_name}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.email}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.gender}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{user.ip_address}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{clicks}</div></div>
                    <div className={Number.isInteger(user.id/2) ? "filled" : undefined}><div className={"user__el position"}>{pageViews}</div></div>
                </div>
            </span>
        </NavLink>

    );
}

export default User;