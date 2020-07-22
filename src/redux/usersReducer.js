import {
    BEGIN_DATE, END_DATE,
    GET_USER,
    GET_USERS,
    GET_USERS_STATISTIC,
    GET_WEEKLY_CLICKS,
    GET_WEEKLY_DATES,
    GET_WEEKLY_VIEWS,
    USERS_COUNT
} from "./types";

const Initialstate = {
    users: [],
    usersStatistic: [],
    user: {},
    weeklyDates: [],
    weeklyClicks: [],
    weeklyViews: [],
    usersCount: null,
    pageSize: 10,
    beginDate: null,
    endDate: null
}

export const usersReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_USERS_STATISTIC:
            return {
                ...state,
                usersStatistic: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_WEEKLY_DATES:
            return {
                ...state,
                weeklyDates: action.payload
            }
        case GET_WEEKLY_CLICKS:
            return {
                ...state,
                weeklyClicks: action.payload
            }
        case GET_WEEKLY_VIEWS:
            return {
                ...state,
                weeklyViews: action.payload
            }
        case USERS_COUNT:
            return {
                ...state,
                usersCount: action.payload.q
            }
        case BEGIN_DATE:
            return {
                ...state,
                beginDate: action.payload
            }
        case END_DATE:
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state
    }
}
