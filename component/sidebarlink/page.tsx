"use client"

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import styles from './sidebarlink.module.scss'
import Link from 'next/link';
import Icon from '../Icon/page';
import { IconType } from '@/utils/icon';

interface SidebarLinkProps {
  path: string;
  icon: IconType;
  text: string;
}

const SideBarLink = ({path, text, icon} : any) => {
    const router = usePathname();

    const isLinkActive =
    router === `/dashboard${path ? "/" + path : ""}`;

      const isActive = isLinkActive ? "active" : "";

  return (
    <>
    <Link href={`/dashboard/${path}`} className={`${styles["link"]} ${styles[isActive]}`}>
      <span className={styles["sidebar-nav-link"]}>
        <div className={styles["sidebar-nav-link-logo"]}>
          <Icon icon={icon} width={20} height={20} />
        </div>
        <p className={styles["sidebar-nav-link-text"]}>{text ? text : path}</p>
      </span>
    </Link>
    
    
    
  </>
  )
}

export default SideBarLink