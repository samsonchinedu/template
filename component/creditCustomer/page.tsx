import React from 'react'
import styles from "./creditCustomer.module.scss"
import { LiaTimesSolid } from "react-icons/lia";
import Label from '../label/page';
import Input from '../input/page';
import ButtonComponent from '../button/page';

const CreditCustomer = () => {
    return (
        <form className={styles["credit"]}>
            <div className={styles["credit-top"]}>
                <small>Credit Customer</small>
                <div className={styles["credit-top-icon"]}>
                    <LiaTimesSolid />
                </div>
            </div>
            <div className={styles["credit-bottom"]}>
                <div className={styles["credit-bottom-inputs"]}>
                    <div className={styles["credit-bottom-inputs-input"]}>
                        <Label text="Amount To Credit" />
                        <Input type="text" placeholder="N100,000.00" input="input" />
                    </div>
                    <div className={styles["credit-bottom-inputs-input"]}>
                        <Label text="Amount To Credit" />
                        <Input type="text" placeholder="N100,000.00" input="input" />
                    </div>
                </div>
                <div className={styles["confirm-white-bg-form-inputBtn"]} >
                    <ButtonComponent 
                        bg="#FF9B12" 
                        text="Credit Customer"
                        color="#FFFFFF" 
                        btn="confirm-btn" 
                    />
                </div>
            </div>
        </form>
    )
}

export default CreditCustomer