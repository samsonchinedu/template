import React from 'react'
import styles from "./admin-card.module.scss"
import Image from 'next/image'
import Icon from '../Icon/page'

const AdminCard = ({ src, title, text, icon, icons, iconType, iconLocal, typeText } : any) => {
  return (
    <div className={styles["card"]}>
        <div className={styles["card-top"]}>
            <Image src={src} alt='thumbnail' />
            <div className={styles["card-top-tag"]}>
                <div className={styles["card-top-tag-name"]}>
                    <Icon icon={iconType} />
                    <small>{typeText}</small>
                </div>
                <div className={styles["card-top-tag-like"]}></div>
            </div>
        </div>
        <div className={styles["card-bottom"]}>
            <div className={styles["card-top-tag"]}></div>
        </div>
    </div>
  )
}

export default AdminCard