"use client"

import Link from 'next/link';
import Icon from '../Icon/page';
import { IconType } from '@/utils/icon';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './sidebarlink.module.scss';
import { FaChevronDown } from "react-icons/fa";
import SIdeBarDropown from '../sideBarDropdown/page';

interface SidebarLinkProps {
  path: string;
  icon: IconType;
  text: string;
}

const SideBarLink = ({path, text, icon, isActive } : any) => {
  const [toggle, setToggle] = useState(false);
 const show = isActive ? !toggle : toggle;
  const changeView = () => {
    if(isActive) {
      setToggle(!toggle)
    }
  }

    const router = usePathname();

    const isLinkActive =
    router === `/dashboard${path ? "/" + path : ""}`;

      const isActived = isLinkActive ? "active" : "";

  return (
    <>

    <Link href={`/dashboard/${path}`} className={`${styles["link"]} ${styles[isActived]}`} onClick={changeView}>
      <span className={styles["sidebar-nav-link"]}>
        <div className={styles["sidebar-nav-link-logo"]}>
          <Icon icon={icon} width={20} height={20} />
        </div>
        <p className={styles["sidebar-nav-link-text"]}>{text ? text : path}</p>
      </span>
      { isActive ? <FaChevronDown className={styles["link-icon"]} /> : ""}
    </Link>

    { toggle ? 
      ( <div style={{marginTop: "1rem"}}>
          <SIdeBarDropown path="manage-people" subPath="manage-people/manage-customers" subText1="Manage Customers" div1="div1" />
          <SIdeBarDropown path="manage-people" subPath="manage-people" subText1="Manage Agents" div1="div1" />
          <SIdeBarDropown path="manage-people" subPath="manage-people/manage-employees" subText1="Manage Employees" />
        </div> 
      )
    : "" }
    
    
  </>
  )
}

export default SideBarLink