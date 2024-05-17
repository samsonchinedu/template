import React from 'react'
import styles from './header.module.scss'
import Icon from '../Icon/page'
import { icons } from '@/utils/icon'

const Header = ({ text, small, btnText, icon, active } : any) => {

  return (
    <div className={styles["header"]}>
        <div className={styles["header-left"]}>
            <h3>{text}</h3>
            <small>{small}</small>
        </div>
        <div className={`${styles["header-right"]} ${!active ? styles["header-disable"] : ""}`}>
            <Icon icon={icon} />
            <button>{btnText}</button>
        </div>
    </div>
  )
}

export default Header