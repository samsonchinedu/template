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

const ManageCustomers = () => {
    const [date] = useState(true)
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
                    <TableCustomerComponent />
                    <CreditDropDown />
                    <CreditCustomer />
                </div>
            </div>
        </div>
    )
}

export default ManageCustomers