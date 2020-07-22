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

const getUsers = (payload) => ({type: GET_USERS, payload})
const getUser = (payload) => ({type: GET_USER, payload})
const getUsersCount = (payload) => ({type: USERS_COUNT, payload})
const getUsersStatistic = (payload) => ({type: GET_USERS_STATISTIC, payload})
const getWeeklyDates = (payload) => ({type: GET_WEEKLY_DATES, payload})
const getWeeklyClicks = (payload) => ({type: GET_WEEKLY_CLICKS, payload})
const getWeeklyViews = (payload) => ({type: GET_WEEKLY_VIEWS, payload})
const getBeginDate = (payload) => ({type: BEGIN_DATE, payload})
const getEndDate = (payload) => ({type: END_DATE, payload})

export const getUsersThunk = (pageSize, pageNumber = 0) => async (dispatch) => {
    const response = await fetch(`/api/users/${pageSize}/${pageNumber}`)
    const json = await response.json()
    dispatch(getUsers(json))
}

export const getUsersStatisticThunk = () => async (dispatch) => {
    const response = await fetch('/api/statistics')
    const json = await response.json()
    dispatch(getUsersStatistic(json))
}

export const getUserThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/user/${id}`)
    const json = await response.json()
    dispatch(getUser(json))
}
export const getUserCountThunk = () => async (dispatch) => {
    const response = await fetch(`/api/userscount`)
    const json = await response.json()
    dispatch(getUsersCount(json))
}

export const getWeeklyStatisticThunk = (id) => async (dispatch, getState) => {
    let allDates = getState().users.usersStatistic.filter(u => u.user_id === id).map(s => s.date)
    let allDatasClicks = getState().users.usersStatistic.filter(u => u.user_id === id).map(s => s.clicks)
    let allDatasViews = getState().users.usersStatistic.filter(u => u.user_id === id).map(s => s.page_views)

    const c = function () {
        let arr = []
        for (let i = allDates.length - 7; i < allDates.length; i++) {
            arr.push(allDatasClicks[i])
        }
        return arr
    }()
    dispatch(getWeeklyClicks(c))

    const v = function () {
        let arr = []
        for (let i = allDates.length - 7; i < allDates.length; i++) {
            arr.push(allDatasViews[i])
        }
        return arr
    }()
    dispatch(getWeeklyViews(v))

    const d = function () {
        let arr = []
        for (let i = allDates.length - 7; i < allDates.length; i++) {
            arr.push(allDates[i])
        }
        return arr
    }()
    dispatch(getWeeklyDates(d))
    dispatch(getBeginDate(d[0]))
    dispatch(getEndDate(d[6]))
}
