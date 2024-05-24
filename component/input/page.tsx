import React from 'react'
import styles from "./input.module.scss"

const Input = ({type, placeholder, onChange, ref, style, checkbox} : any) => {
  return (
    <>
        <input
          ref={ref}
          type={type}
          className={styles[`input-${checkbox}`]}
          placeholder={placeholder}
          onChange={onChange}
          style={{ display: style }}
        />
    </>
  )
}

export default Input