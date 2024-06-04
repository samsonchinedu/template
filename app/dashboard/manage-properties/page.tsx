"use client"

import React, { useState } from 'react'
import styles from "./manageProperties.module.scss"
import Navbar from '@/component/navbar/page'
import Header from '@/component/header/page'
import AdminCard from '@/component/adminCard/page'
import House from "@/public/image/house.png"
import Land from "@/public/image/land.png"
import Estate from "@/public/image/estate.png"
import SortProperty from '@/component/sortProperty/page'
import WarningComponent from '@/component/warning/page'
import ConfirmComponent from '@/component/confirm/page'
import { useRouter } from 'next/navigation'

const ManageProperty = () => {
  const router = useRouter();
  const push = () => {
    router.push("list-property")
  }

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  
  const popWarning = () =>{
    setToggle(!toggle)
  }

  const popOut = () =>{
    setToggle2(!toggle2)
  }

  const popOut2 = () =>{
    setToggle3(!toggle3)
  }

  return (
    <div className={styles["manage-property"]}>
         <Navbar icon="arrow" icons="notification" defaultImage="vector" />
         <div className={styles["manage-property-right"]}>
          <Header 
            text="Manage a Property" 
            small="Manage a Listed Property" 
            btnText="Add New Property" 
            icon="plus"
            right="right"
            active="isActive"
            onClack={push}
          />

          <SortProperty />

          <div className={styles["manage-property-right-cards"]}>
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
              onClick={popWarning}
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
              onClick={popWarning}
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
              onClick={popWarning} 
            />
          </div>
          <div className={styles["manage-property-right-cards"]}>
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
              onClick={popWarning} 
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
              onClick={popWarning} 
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
              onClick={popWarning} 
            />
          </div>
          <div className={styles["manage-property-right-cards"]}>
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
              onClick={popWarning} 
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
              onClick={popWarning} 
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
              onClick={popWarning} 
            />
          </div>
         </div>
         <WarningComponent show={toggle} data={toggle} onClick={popWarning} onClack={popOut}  />
         <ConfirmComponent show={toggle2} onClick={popOut2} />
    </div>
  )
}

export default ManageProperty