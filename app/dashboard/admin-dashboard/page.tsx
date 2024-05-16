import React from 'react'
import styles from "./admin-dashboard.module.scss"
import Header from '@/component/header/page'
import Navbar from '@/component/navbar/page'

const AdminDashboard = () => {
  return (
    <div className={styles["admin-dashboard"]}>
      <Navbar icon="arrow" />
      <Header text="Dashboard Overview" />
        <div className={styles["admin-dashboard-right"]}>
          
        </div>
    </div>
  )
}

export default AdminDashboard