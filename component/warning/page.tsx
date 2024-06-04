"use client"

import React, { useState } from 'react'
import styles from "./warning.module.scss"
import { useRouter } from 'next/navigation'
import WarnComponent from '../warn/page'

const WarningComponent = ({ show, data, onClick, onClack }: any) => {
  const router = useRouter();

  return (
    <div className={show ? styles["warning"] : styles["d-non"]}>
      <WarnComponent
        warn="white-bg"
        disable={data}
        onClack={onClack}
        onClick={onClick}
        text="This will delete data associated with this property"
        title="Are you sure you want to delete Sunshine Estate Property?"
      />
    </div>
  )
}

export default WarningComponent