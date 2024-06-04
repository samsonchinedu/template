import React from 'react'
import styles from "./button.module.scss"
import Link from 'next/link'

const ButtonComponent = ({text, bg, color, btn} : any) => {
  return (
    <button 
      type='submit' 
      className={styles[btn]}
      style={{background: bg, color: color}} 
    >
        {text}
    </button>
  )
}

export default ButtonComponent