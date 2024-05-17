import React from 'react'
import styles from "./admin-dashboard.module.scss"
import Title from '@/component/title/page'
import Navbar from '@/component/navbar/page'
import Header from '@/component/header/page'

const AdminDashboard = () => {
  return (
    <div className={styles["admin-dashboard"]}>
      <Navbar icon="arrow" icons="notification" defaultImage="vector" />
      <div className={styles["admin-dashboard-right"]}>
        <Title text="Dashboard Overview" />
        <Header 
          text="Manage a Property" 
          small="Manage a Listed Property" 
          btnText="Add New Property" 
          icon="plus" 
          active="isActive"
        />
        <div className={styles["admin-dashboard-right-boxs"]}>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard