import React from 'react';
import ViewsDiagram from "./ViewsDiagram";

const ViewsContainer = ({user, usersStatistic, beginDate, endDate,  weeklyViews, weeklyDates, getWeeklyStatisticThunk }) => {
    return (
        <div>
            <ViewsDiagram userStatistic={usersStatistic.filter(u => u.user_id === user.id)}
                          user={user}
                          weeklyDates={weeklyDates}
                          weeklyViews={weeklyViews}
                          getWeeklyStatisticThunk={getWeeklyStatisticThunk}
                          beginDate={beginDate}
                          endDate={endDate}
            />
        </div>
    );
}

export default ViewsContainer;