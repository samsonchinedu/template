import React from 'react'
import Input from '../input/page';
import ButtonComponent from '../button/page';
import Label from '../label/page';
import { LiaTimesSolid } from 'react-icons/lia';
import styles from "./debitCustomer.module.scss"

const DebitCustomer = ({showDebitCustomer, onClick} : any) => {
    const isActive = showDebitCustomer ? "debit" : "none";

    return (
        <form className={styles[isActive]}>
            <div className={styles["debit-top"]}>
                <small>Debit Customer</small>
                <div className={styles["debit-top-icon"]} onClick={onClick}>
                    <LiaTimesSolid />
                </div>
            </div>
            <div className={styles["debit-bottom"]}>
                <div className={styles["debit-bottom-inputs"]}>
                    <div className={styles["debit-bottom-inputs-input"]}>
                        <Label text="Amount To Debit" />
                        <Input type="text" placeholder="N100,000.00" input="input" />
                    </div>
                    <div className={styles["debit-bottom-inputs-input"]}>
                        <Label text="Reason for Debit" />
                        <Input type="text" placeholder="House Property" input="input" />
                    </div>
                </div>
                <div className={styles["confirm-white-bg-form-inputBtn"]} >
                    <ButtonComponent 
                        bg="#FF9B12" 
                        text="Debit Customer"
                        color="#FFFFFF" 
                        btn="confirm-btn" 
                    />
                </div>
            </div>
        </form>
    )
}

export default DebitCustomer