

import React from 'react'
import styles from "./manageProperties.module.scss"
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
import SortProperty from '@/component/sortProperty/page'

const ManageProperty = () => {
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
         </div>
    </div>
  )
}

export default ManageProperty