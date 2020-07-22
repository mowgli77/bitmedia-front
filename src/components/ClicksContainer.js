import React from 'react';
import ClickDiagram from "./ClicksDiagram";

const ClicsContainer = ({user, usersStatistic, beginDate, endDate, weeklyDates, weeklyClicks, getWeeklyStatisticThunk}) => {
    return (
        <div>
            <ClickDiagram userStatistic={usersStatistic.filter(u => u.user_id === user.id)}
                          user={user}
                          weeklyDates={weeklyDates}
                          weeklyClicks={weeklyClicks}
                          getWeeklyStatisticThunk={getWeeklyStatisticThunk}
                          beginDate={beginDate}
                          endDate={endDate}
            />
        </div>
    );
}

export default ClicsContainer;
