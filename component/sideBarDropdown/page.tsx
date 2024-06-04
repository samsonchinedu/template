import React from 'react'
import styles from "./sideBarDropdown.module.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const SIdeBarDropown = ({ path, subPath, subText1, div1} : any) => {
    const router = usePathname();

    const isLinkActive =
    router === `/dashboard${subPath ? "/" + subPath : ""}`;
    const onActived = isLinkActive ? "onActive" : "";

  return (
        <ul className={styles["ul"]}>
          <div className={`${styles[div1]} ${styles["none"]}`}></div>
          <Link href={`/dashboard/${subPath}`} className={`${styles[onActived]} ${styles["link"]}`}>
            <li>{subText1}</li>
          </Link>
        </ul> 
  )
}

export default SIdeBarDropown