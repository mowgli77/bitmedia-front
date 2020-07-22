import React, {useState} from "react";


export const Pagination = ({usersCount, pageSize, portionSize, onChangedPage, ...props}) => {

    const pagesCount = Math.ceil(usersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const x = '<'
    const [portionNumber, setPortionNumber] = useState(1);

    const portionsCount = Math.ceil(pagesCount / portionSize);
    const leftBorder = portionSize * (portionNumber - 1) + 1;
    const rightBorder = portionSize * portionNumber;

    return <div className={"pagination"}>
        {portionNumber > 1 &&
        <div className={"pagination__arrow"}><span onClick={() => setPortionNumber(portionNumber - 1)}>
            {x}</span></div>}
        {pages.filter(p => rightBorder >= p && p >= leftBorder).map(p => {
            return <div className={"pagination__el"}><span onClick={() => onChangedPage(p - 1)}>{p}</span></div>
        })
        }
        {portionsCount > portionNumber &&
        <div className={"pagination__arrow"}><span onClick={() => setPortionNumber(portionNumber + 1)}>
                ></span></div>}
    </div>
}

export default Pagination