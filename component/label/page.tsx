import React from 'react'
import styles from './label.module.scss'

const Label = ({text, option, confirm} : any) => {
  return (
    <label htmlFor={option} className={styles[`label-${confirm}`]}>{text}</label>
  )
}

export default Label