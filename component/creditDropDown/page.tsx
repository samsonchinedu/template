import React from 'react'
import Icon from '../Icon/page'
import styles from './creditDropDown.module.scss'

const CreditDropDown = () => {
  return (
    <div className={styles["creditDropDown"]}>
        <div className={`${styles["creditDropDown-credit"]} ${styles["creditDropDown-active"]}`}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="sendSquare" width={16} height={16} />
            </div>
            <p>View Details</p>
        </div>
        <div className={styles["creditDropDown-credit"]}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="cardReceive" width={16} height={16} />
            </div>
            <p>Credit Customer</p>
        </div>
        <div className={styles["creditDropDown-credit"]}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="cardReceive" width={16} height={16} />
            </div>
            <p>Debit Customer</p>
        </div>
        <div className={styles["creditDropDown-credit"]}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="trash2" width={16} height={16} />
            </div>
            <p>Disable Customer</p>
        </div>
    </div>
  )
}

export default CreditDropDown