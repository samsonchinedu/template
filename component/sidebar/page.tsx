import React from 'react'
import SideBarLink from '../sidebarlink/page'
import styles from "./sidebar.module.scss"
import Logo from '../logo/page'

const SideBar = () => {
  return (
    <div className={styles["sidebar"]}>
      <Logo />
      <SideBarLink icon="category" text="Dashboard" path="admin-dashboard" />
      <SideBarLink icon="shoppingCart" text="List Property" path="list-property" />
      <SideBarLink icon="home" text="Manage Properties" path="manage-properties" />
      <SideBarLink icon="people" text="Manage Poeple" path="manage-people" isActive="true" />
      <SideBarLink icon="emptyWallet" text="Manage finance" path="manage-finance" isActive="true"  />
      <SideBarLink icon="receipt" text="Payroll" path="payroll" />
      <SideBarLink icon="folderOpen" text="Workspace Tools" path="workspace-tools" isActive="true"  />
    </div>
  )
}

export default SideBar;