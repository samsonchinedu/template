import React from 'react'
import styles from './label.module.scss'

const Label = ({text, option} : any) => {
  return (
    <label htmlFor={option} className={styles['label']}>{text}</label>
  )
}

export default Label