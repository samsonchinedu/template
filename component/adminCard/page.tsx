import React from 'react'
import styles from "./admin-card.module.scss"
import Image from 'next/image'
import Icon from '../Icon/page'

const AdminCard = ({ src, name, typeColor, title, text, icon, iconEdit, iconTrash, iconLocal, typeText } : any) => {

    const className = typeText === "Activated" ? "none" : ""; 
  return (
    <div className={styles["card"]}>
        <div className={styles["card-top"]}>
            <Image src={src} alt='thumbnail' />
            <div className={styles["card-top-tag"]}>
                <div className={`${styles[`card-top-tag-${typeColor}`]} `}>
                    <div></div>
                    <small>{typeText}</small>
                </div>
                <div className={styles["card-top-tag-like"]} style={{display: className}}>
                    <Icon icon={icon} />
                </div>
            </div>
        </div>
        <div className={styles["card-bottom"]}>
            <div className={styles["card-bottom-detail"]}>
                <p>{title}</p>
                <div className={styles["card-bottom-detail-location"]}>
                    <div className={styles["card-bottom-detail-location-local"]}>
                        <Icon icon={iconLocal} />
                        <small>{text}</small>
                    </div>
                    <div className={styles["card-bottom-detail-location-mutate"]}>
                        <Icon icon={iconEdit} />
                        <Icon icon={iconTrash} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCard