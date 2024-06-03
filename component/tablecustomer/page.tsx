import React from 'react'
import styles from './tablecustomer.module.scss'
import { customer } from '@/utils/manageAgentData'
import Icon from '../Icon/page'

const TableCustomerComponent = () => {
  return (
    <div className={styles["table"]}>
        <ul className={styles["table-thead"]}>
            <li>Name</li>
            <li>Date Of Birth</li>
            <li>Phone Number</li>
            <li>Identification NUmber</li>
        </ul>
        <div className={styles["table-listedOrder"]}>
            {customer.map((referral, index) => (
                <ul className={styles["table-listedOrder-list"]} key={index}>
                    <li>{referral.name}</li>
                    <li>{referral.dob}</li>
                    <li>{referral.phone}</li>
                    <li>{referral.idnum} (NIN)</li>
                    <li>
                        <Icon icon="verticalFrame" width={20} height={20} />
                    </li>
                </ul>
            ))
            }
        </div>
    </div>
  )
}

export default TableCustomerComponent