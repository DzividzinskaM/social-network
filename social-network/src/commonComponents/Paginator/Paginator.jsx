import s from "./Paginator.module.css";
import React, {useState} from "react";

let Paginator = ({itemsTotalCount, itemsPageSize, itemsCurrentPage, onChangedPage, portionNumber = 10}) => {

    // TODO - fix left border and button click

    let itemPageNumbers = Math.ceil(itemsTotalCount / itemsPageSize); //all pages
    let pageNumber = Math.ceil(itemsCurrentPage / portionNumber); //start current page in paginator
    let pagesTotalCount = Math.ceil(itemPageNumbers/portionNumber);
    let [currentPage, setCurrentPage] = useState(pageNumber); //current page in paginator

    let leftBorder = (currentPage - 1) * portionNumber + 1;
    let rightBorder = currentPage * portionNumber;
    let pages = [];

    for (let i = 0; i <= itemPageNumbers; i++) {
        pages.push(i);
    }

    let pagesString = pages
        .filter(p => p >= leftBorder && p <= rightBorder)
        .map(p => {
            return <span className={itemsCurrentPage === p && s.selectedItem}
                         onClick={(e) => {
                             onChangedPage(p)
                         }}>
                        {p}     </span>
        });

    return <div className={s.paginator}>
        {
            currentPage > 1 &&
            <div>
                <button onClick={() => {setCurrentPage(currentPage+1)}}>Left</button>
            </div>
        }
        {pagesString}
        {
            currentPage < pagesTotalCount &&
            <div>
                <button onClick={() => {setCurrentPage(currentPage+1)}}>Right</button>
            </div>
        }
    </div>
}

export default Paginator;