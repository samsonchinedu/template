import React from 'react'
import styles from "./admin-dashboard.module.scss"
import Title from '@/component/title/page'
import Navbar from '@/component/navbar/page'
import Header from '@/component/header/page'
import AdminCard from '@/component/adminCard/page'
import House from "@/public/image/house.png"
import Land from "@/public/image/land.png"
import Estate from "@/public/image/estate.png"
import Jerome from "@/public/image/jerome-woman.png"
import John from "@/public/image/john-man.png"
import Savannah from "@/public/image/savannah-man.png"

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
          right="right"
          active="isActive"
        />
        <div className={styles["admin-dashboard-right-cards"]}>
          <AdminCard 
            src={House}
            name="agent"
            typeText="House" 
            typeColor="blue"
            icon="heart"
            iconEdit="edit"
            iconTrash="trash"
            iconLocal="location"
            title="Three Bedroom Duplex"
            text="Lagos, Nigeria" 
          />
          <AdminCard 
            src={Land}
            name="agent"
            typeText="Land" 
            typeColor="orange"
            icon="heart"
            iconEdit="edit"
            iconTrash="trash"
            iconLocal="location"
            title="2 Hectare Of Farm Land"
            text="Lagos, Nigeria" 
          />
          <AdminCard 
            src={Estate}
            name="agent"
            typeText="Estate" 
            typeColor="green"
            icon="heart"
            iconEdit="edit"
            iconTrash="trash"
            iconLocal="location"
            title="Sunshine Estate"
            text="Lagos, Nigeria" 
          />
        </div>
        
        <Header 
          active="isActive"
          marginTop="mt-4rem"
          text="Manage a Agent" 
          small="Manage a Listed Agency" 
          btnText="View Pending Approval" 
        />
        <div className={styles["admin-dashboard-right-cards"]}>
          <AdminCard 
            src={John}
            name="agent"
            typeText="Activated" 
            typeColor="green"
            iconTrash="frame"
            title="John Rolex"
            text="ID: 2834-2949-AB34" 
          />
          <AdminCard 
            src={Jerome}
            name="agent"
            typeText="Activated" 
            typeColor="green"
            iconTrash="frame"
            title="Jerome Bell"
            text="ID: 2834-2949-AB34" 
          />
          <AdminCard 
            src={Savannah}
            name="agent"
            typeText="Activated" 
            typeColor="green"
            iconTrash="frame"
            title="Savannah Nguyen"
            text="ID: 2834-2949-AB34" 
          />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard