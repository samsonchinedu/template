import React from 'react'
import styles from "./confirm.module.scss"
import { LiaTimesSolid } from "react-icons/lia";
import Label from '../label/page';
import Input from '../input/page';
import ButtonComponent from '../button/page';

const ConfirmComponent = ({onClick, show} :any) => {
  return (
    <div className={show ? styles["confirm"] : styles["d-none"]}>
        <div className={styles["confirm-white-bg"]}>
            <div className={styles["confirm-white-bg-top"]}>
                <small>Enter your Password to Continue</small>
                <div className={styles["confirm-white-bg-top-icon"]}>
                    <LiaTimesSolid />
                </div>
            </div>
            <form className={styles["confirm-white-bg-form"]}>
                <div className={styles["confirm-white-bg-form-input"]}>
                    <Label text="Your Password" />
                    <Input type="password" placeholder="Password" input="input" />
                </div>
                <div className={styles["confirm-white-bg-form-inputBtn"]} onClick={onClick}>
                    <ButtonComponent 
                        bg="#FF9B12" 
                        text="Confirm" 
                        color="#FFFFFF" 
                        btn="confirm-btn" 
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ConfirmComponent