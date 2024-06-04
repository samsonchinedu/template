"use client"

import React, { useState } from 'react'
import styles from "./sortProperty.module.scss"
import Icon from '../Icon/page'
import DateRange from '../dateRange/page'



const SortProperty = ({range} : any) => {

    const [sort, setSort] = useState(false);
    const [textInput, setTextInput] = useState('All');
    const [selectInput, setSelectInput] = useState('');

    const handleClick = () => {
        setSort(!sort)
    }

    const handleTextInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setTextInput(event.target.value);
    };

    const handleSelectInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSelectInput(event.target.value);
    };

  return (
    <div className={styles["sort-property"]}>
        <div className={styles["sort-property-items"]}>
            <div className={styles["sort-property-items-sorted"]} onClick={handleClick}>
                <ul  className={styles["sort-property-items-sorted-types"]}>
                    <li>{textInput}</li>
                    { sort ? (
                        <ul  className={styles["sort-property-items-sorted-types-type"]} > 
                            <li className={!sort ? "" : styles["active"]}>All</li>
                            <li className={!sort ? styles["active"] : ""}>Name</li>
                            <li className={!sort ? styles["active"] : ""}>Price range</li>
                            <li className={!sort ? styles["active"] : ""}>Date add</li>
                            <li className={!sort ? styles["active"] : ""}>Property type</li>
                        </ul>) 
                    : ""}
                </ul>
                <Icon icon='sort' width={16} height={16} />
            </div>
            { range &&  <DateRange /> }
            <div className={styles["sort-property-items-search"]}>
                <Icon icon='search' width={20} height={20} />
                <input type="text" placeholder='Search' className={styles["sort-property-items-search-input"]} />
            </div>
        </div>
        <div className={styles["sort-property-paganation"]}>
            <small>1-30 of 200</small>
            <div  className={styles["sort-property-paganation-icons"]}>
                <div  className={styles["sort-property-paganation-icons-icon"]}>
                <Icon icon='arrowLeft' width={10} height={10} />
                </div>
                <div  className={styles["sort-property-paganation-icons-icon"]}>
                    <Icon icon='arrowRight' width={10} height={10} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SortProperty