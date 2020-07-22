export const periodFunction = (dateArray, dataArray, dateSetter, dataSetter, beginingDate, endDate) => {
    const c = function () {
        let arr = []
        for (let i = dateArray.indexOf(beginingDate); i <= dateArray.indexOf(endDate); i++) {
            arr.push(dataArray[i])
        }
        return arr
    }()
    dataSetter(c)

    const d = function () {
        let arr = []
        for (let i = dateArray.indexOf(beginingDate); i <= dateArray.indexOf(endDate); i++) {
            arr.push(dateArray[i])
        }
        return arr
    }()
    dateSetter(d)
}


// export const periodWeeklyFunction = (actionDate, actionData) => {
//     let allDates = getState().users.usersStatistic.filter(u => u.user_id === id).map(s => s.date)
//     let allDatas = getState().users.usersStatistic.filter(u => u.user_id === id).map(s => s.clicks)
//
//     const c = function () {
//         let arr = []
//         for (let i = allDates.length - 7; i < allDates.length; i++) {
//             arr.push(allDatas[i])
//         }
//         return arr
//     }()
//     dispatch(actionData(c))
//
//     const d = function () {
//         let arr = []
//         for (let i = allDates.length - 7; i < allDates.length; i++) {
//             arr.push(allDates[i])
//         }
//         return arr
//     }()
//     dispatch(actionDate(d))
// }
