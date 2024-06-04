"use client"

import React, { useState } from 'react'
import styles from "./warning.module.scss"
import { useRouter } from 'next/navigation'
import WarnComponent from '../warn/page'

const WarningComponent = ({show, onClick, onClack} : any) => {
    const router = useRouter();
    


    
    console.log(show);
    
  return (
    <div className={show ? styles["warning"] : styles["d-non"]}>
        <WarnComponent text="This will delete data associated with this property" title="Are you sure you want to delete Sunshine Estate Property?" onClack={onClack} onClick={onClick} />
    </div>
  )
}

export default WarningComponent