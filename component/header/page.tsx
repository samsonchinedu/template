import React from 'react'
import styles from './header.module.scss'
import Icon from '../Icon/page'
import { icons } from '@/utils/icon'

const Header = ({ text, small, btnText, icon, active, onClack, right } : any) => {

  console.log(onClack);
  

  return (
    <div className={`${styles["header"]} ${styles[text]}`}>
        <div className={styles["header-left"]}>
            <h3>{text}</h3>
            <small>{small}</small>
        </div>
        <div className={`${styles[`header-${right}`]} ${!active ? styles["header-disable"] : ""}`} onClick={onClack}>
            <Icon icon={icon} width={20} height={20} />
            <button>{btnText}</button>
        </div>
    </div>
  )
}

export default Header