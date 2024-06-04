import React from 'react'
import styles from './table.module.scss'
import { agentProf } from '@/utils/manageAgentData'

const TableComponent = () => {
  return (
    <div className={styles["table"]}>
        <ul className={styles["table-thead"]}>
            <li>Transaction type</li>
            <li>Referral Name</li>
            <li>Outstanding Payment</li>
            <li>Date Added</li>
            <li>Status</li>
        </ul>
        <div className={styles["table-listedOrder"]}>
            {agentProf.map((referral, index) => (
                <ul className={styles["table-listedOrder-list"]} key={index}>
                    <li>{referral.transType}</li>
                    <li>{referral.referral}</li>
                    <li>{referral.outstandingPay}</li>
                    <li>{referral.dateAdd}</li>
                    <li className={styles[`table-listedOrder-list${referral.statusClass}`]}><div></div>{referral.status}</li>
                    <li>view reciept</li>
                </ul>
            ))
            }
        </div>
    </div>
  )
}

export default TableComponent