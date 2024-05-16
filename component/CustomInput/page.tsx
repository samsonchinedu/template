import React from 'react'
import styles from "./custominput.module.scss"

const CustomInput = ({label, type, name, placeholder} : any) => {
  return (
    <div className={styles["input-field"]}> 
        <label>{label}:</label>
        <input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default CustomInput