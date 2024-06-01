"use client"

import React, { useState } from 'react'
import styles from "./mange-people.module.scss"
import Navbar from '@/component/navbar/page'
import Header from '@/component/header/page'
import SortProperty from '@/component/sortProperty/page'
import AdminCard from '@/component/adminCard/page'

import { agent } from "@/utils/manageAgentData"
import Link from 'next/link'

const ManagePeople = () => {
    const [date, setDate] = useState(true)

  return (
    <div className={styles["manage-people"]}>
        <Navbar icon="arrow" icons="notification" defaultImage="vector" />

        <div className={styles["manage-people-right"]}>
            <Header 
            active="isActive"
            right="approve"
            marginTop="mt-4rem"
            text="Manage a Agent"
            small="View all agents and perform various actions" 
            btnText="View Pending Approval" 
            />

            <SortProperty range={date} />

            <div className={styles["manage-people-right-cards"]}>
                {agent.map((item) => (
                    <Link href={`/dashboard/manage-people/manageAgent/${item.id}`} key={item.id} className={styles["manage-people-right-cards-link"]}>
                        <AdminCard 
                            src={item.thumbnail}
                            typeText="Activated" 
                            typeColor="green"
                            iconTrash="frame"
                            title={item.name}
                            text={item.id}
                        />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ManagePeople