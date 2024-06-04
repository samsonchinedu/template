import React from 'react'
import Icon from '../Icon/page'
import styles from './creditDropDown.module.scss'

const CreditDropDown = ({showCreditDrop, onClick, onClickDebit, onClickDisable,remove} : any) => {

    const isActive = showCreditDrop ? "creditDropDown" : "none";

    console.log(remove);
    

  return (
    <div className={styles[isActive]}>
        <div className={`${styles["creditDropDown-credit"]} ${styles["creditDropDown-active"]}`} onClick={remove}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="sendSquare" width={16} height={16} />
            </div>
            <p>View Details</p>
        </div>
        <div className={styles["creditDropDown-credit"]} onClick={onClick}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="cardReceive" width={16} height={16} />
            </div>
            <p>Credit Customer</p>
        </div>
        <div className={styles["creditDropDown-credit"]} onClick={onClickDebit}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="cardReceive" width={16} height={16} />
            </div>
            <p>Debit Customer</p>
        </div>
        <div className={styles["creditDropDown-credit"]} onClick={onClickDisable}>
            <div className={styles["creditDropDown-credit-icon"]}>
                <Icon icon="trash2" width={16} height={16} />
            </div>
            <p>Disable Customer</p>
        </div>
    </div>
  )
}

export default CreditDropDown