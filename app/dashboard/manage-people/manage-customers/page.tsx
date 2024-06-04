"use client"

import React, { useState } from 'react'
import Navbar from '@/component/navbar/page'
import styles from "./mg-customers.module.scss"
import Header from '@/component/header/page'
import SortProperty from '@/component/sortProperty/page'
import TableComponent from '@/component/table/page'
import TableCustomerComponent from '@/component/tablecustomer/page'
import CreditDropDown from '@/component/creditDropDown/page'
import CreditCustomer from '@/component/creditCustomer/page'
import DebitCustomer from '@/component/debitCustomer/page'
import WarningComponent from '@/component/warning/page'
import WarnComponent from '@/component/warn/page'

const ManageCustomers = () => {
    const [date] = useState(true)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }
    const removeDrop = () => {
        setShow(false)
    }
    const handleClick2 = () => {
        setShow2(!show2)
    };
    const handleClick3 = () => {
        setShow3(!show3)
    };
    const handleClick4 = () => {
        setShow4(!show4)
    };

    return (
        <div className={styles["mg-customers"]}>
            <Navbar icon="arrow" icons="notification" defaultImage="vector" />
            <div className={styles["mg-customers-right"]}>
                <Header
                    right="approve"
                    marginTop="mt-4rem"
                    text="Manage Customers"
                    small="View all agents and perform various actions"
                />

                <SortProperty range={date} />

                <div className={styles["mg-customers-right-table"]}>
                    <p>Customers</p>
                    {/* <TableComponent /> */}
                    <TableCustomerComponent onClick={handleClick} />
                    <CreditDropDown
                        showCreditDrop={show}
                        remove={removeDrop}
                        onClick={handleClick2}
                        onClickDebit={handleClick3}
                        onClickDisable={handleClick4}
                    />
                    <CreditCustomer showCreditCustomer={show2} onClick={handleClick2} />
                    <DebitCustomer showDebitCustomer={show3} onClick={handleClick3} />
                    <WarnComponent
                        warn="warn"
                        disable={show4}
                        onClack={handleClick4}
                        onClick={handleClick4}
                        text="This will delete data associated with this user"
                        title="Are you sure you want to disable this customer account?"
                    />
                </div>
            </div>
        </div>
    )
}

export default ManageCustomers