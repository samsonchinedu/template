import React from 'react'
import ButtonComponent from '../button/page'
import styles from "./warn.module.scss"
import Icon from '../Icon/page'

const WarnComponent = ({onClick, onClack, text, title, warn, disable} : any) => {
    
    const unShow = disable ? warn : "none";

  return (
    <div className={`${styles["white-bg"]} ${styles[unShow]}`}>
            <Icon icon="warning" width={40} height={40} />
            <p>{title}</p>
            <small>{text}</small>
            <div className={styles["white-bg-btn-option"]}>
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
  )
}

export default WarnComponent