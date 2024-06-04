"use client"

import React, { useEffect, useRef, useState } from 'react'
import format from 'date-fns/format'
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import styles from "./dateRange.module.scss"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Icon from '../Icon/page';


const DateRange = () => {
    // date state
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

      // show date if it set state
      const [showDate, setShowDate] = useState("Date Range")

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne : any = useRef(null);

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
      }, [])
    
      // hide dropdown on ESC press
      const hideOnEscape = (e: { key: string; }) => {
        // console.log(e.key)
        if( e.key === "Escape" ) {
          setOpen(false)
        }
      }

      // Hide dropdown on outside click
      const hideOnClickOutside = (e: { target: any; }) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) {
          setOpen(false)
        }
      }

  return (
    <div onClick={ () => setOpen(open => !open) } className={styles["calendarWrap"]}>
        <div className={styles["calendarWrap-input"]}>
            <small aria-readonly className={styles["calendarWrap-input-text"]}>
                {`${format(state[0].startDate, "MM/dd/yyyy")}`}
            </small>
            <Icon icon="calendar" width={16} height={16} />
        </div>

         <div ref={refOne} className={styles["calendarWrap-container"]}>
        {open && 
          <DateRangePicker
            onChange={(item : any)=> setState([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={1}
            direction="horizontal"
            className={styles["calendarWrap-container-calendarElement"]}
          />
        }
      </div>
    </div>
  )
}

export default DateRange