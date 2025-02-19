import React from 'react'
import Icon from '../Icon/page'
import styles from "./navbar.module.scss"
import { IconType } from '@/utils/icon';

interface SidebarLinkProps {
  icon: IconType;
  icons: IconType;
  defaultImage: IconType;
}

const Navbar: React.FC<SidebarLinkProps> = ({icon, icons, defaultImage}) => {
  return (
    <div className={styles["navbar"]}>
        <div className={styles["navbar-left"]}>
          <div className={styles["navbar-left-icon"]}>
            <Icon 
              width={18}
              height={19}
              icon={icon}
            />
          </div>
          <small>Return to previous</small>
        </div>
        <div className={styles["navbar-right"]}>
          <div className={styles["navbar-right-notification"]}>
            <Icon
              width={24}
              height={24}
              icon={icons}
            />
            <div className={styles["navbar-right-natification-dots"]}></div>
          </div>
          <div className={styles["navbar-right-username"]}>
            <div className={styles["navbar-right-username-profile"]}>
              <Icon
                width={20}
                height={18}
                icon={defaultImage}
              />
            </div>
            <div className={styles["navbar-right-username-name"]}>
              <p>Donatusglobus@...</p>
              <small>Admin</small>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar