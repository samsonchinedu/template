import React from 'react'
import styles from "./admin-card.module.scss"
import Image from 'next/image'
import Icon from '../Icon/page'

const AdminCard = ({ src, typeColor, title, text, icon, iconEdit, iconTrash, iconLocal, typeText, onClick } : any) => {


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
                    <Icon icon={icon} width={12} height={12} />
                </div>
            </div>
        </div>
        <div className={styles["card-bottom"]}>
            <div className={styles["card-bottom-detail"]}>
                <p>{title}</p>
                <div className={styles["card-bottom-detail-location"]}>
                    <div className={styles["card-bottom-detail-location-local"]}>
                        <Icon icon={iconLocal} width={16} height={16} />
                        <small>ID: {text}</small>
                    </div>
                    <div className={styles["card-bottom-detail-location-mutate"]}>
                        <div>
                            <Icon icon={iconEdit} width={20} height={20} />
                        </div>
                        <div onClick={onClick}>
                            <Icon icon={iconTrash} width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCard