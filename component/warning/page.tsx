"use client"

import React, { useState } from 'react'
import Icon from '../Icon/page'
import styles from "./warning.module.scss"
import ButtonComponent from '../button/page'
import { useRouter } from 'next/navigation'

const WarningComponent = ({show, onClick, onClack} : any) => {
    const router = useRouter();
    


    
    console.log(show);
    
  return (
    <div className={show ? styles["warning"] : styles["d-none"]}>
        <div className={styles["warning-white-bg"]}>
            <Icon icon="warning" width={34} height={34} />
            <p>Are you sure you want to delete Sunshine Estate Property?</p>
            <small>This will delete data associated with this property</small>
            <div className={styles["warning-white-bg-btn-option"]}>
                <div onClick={onClick}>
                    <ButtonComponent
                        btn="btn"
                        text="Cancel"
                        bg="#F2F2F2"
                        color="#2E3031"
                    />
                </div>
                <div onClick={onClack}>
                    <ButtonComponent
                        btn="btn"
                        bg="#E60A2B"
                        text="Confirm" 
                        color="#ffffff"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WarningComponent