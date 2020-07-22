import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import {periodFunction} from "../common/periodFunction";
import {chartDatafunction, chartOptions} from "../common/chartsUnits";

const ViewsDiagram = (props) => {

    const [allDates, setAllDates] = useState(props.userStatistic.map(s => s.date))
    const [periodDates, setPeriodDates] = useState(props.weeklyDates)
    const [allViews, setAllViews] = useState(props.userStatistic.map(s => s.page_views))
    const [periodViews, setPeriodViews] = useState(props.weeklyViews)
    const [beginingDate, setBeginingDate] = useState(props.beginDate)
    const [endDate, setEndDate] = useState(props.endDate)
    const [isBeginningDating, setisBeginningDating] = useState(false)
    const [isEndingDating, setisEndiingDating] = useState(false)

    const viewStatistic = () => periodFunction(allDates, allViews, setPeriodDates, setPeriodViews, beginingDate, endDate)

    const data = chartDatafunction(periodDates, periodViews, 'Views')

    const changeBaginingDate = () => {
        setisBeginningDating(!isBeginningDating)
    }
    const changeEndingDate = () => {
        setisEndiingDating(!isEndingDating)
    }
    const choiceBeginingDate = (date) => {
        setBeginingDate(date)
        setisBeginningDating(false)
    }
    const choiceEndingDate = (date) => {
        setEndDate(date)
        setisEndiingDating(false)
    }
    useEffect(() => {
        props.getWeeklyStatisticThunk(props.user.id)
    }, [allDates[0]])


    useEffect(() => {
        setAllDates(props.userStatistic.map(s => s.date))
        setAllViews(props.userStatistic.map(s => s.page_views))
        setPeriodDates(props.weeklyDates)
        setPeriodViews(props.weeklyViews)
        setBeginingDate(periodDates[0])
        setEndDate(periodDates[6])
    }, [props])


    return (
        <>
            <div className={"diagrams"}>
                <div className={"diagrams__el_d"}>
                    <span onClick={changeBaginingDate}>{beginingDate}</span>
                    <div className={"choiceDate"}>
                        {isBeginningDating &&
                        props.userStatistic.map(s => <div><span
                            onClick={() => choiceBeginingDate(s.date)}>{s.date}</span>
                        </div>)
                        }
                    </div>
                </div>
                <div className={"diagrams__el_d"}>
                    <span onClick={changeEndingDate}>{endDate}</span>
                    <div className={"choiceDate"}>
                        {isEndingDating &&
                        props.userStatistic.map(s => <div><span onClick={() => choiceEndingDate(s.date)}>{s.date}</span>
                        </div>)
                        }
                    </div>
                </div>
                <div className={"diagrams__el_go"}>
                    <span onClick={viewStatistic}>Views</span>
                </div>
            </div>
            <div className={"chart"}>
                <Line data={data}
                      height={200}
                      options={chartOptions}
                />
            </div>
        </>
    );
}

export default ViewsDiagram;