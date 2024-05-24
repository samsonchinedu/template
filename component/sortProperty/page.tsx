import React from 'react'
import styles from "./sortProperty.module.scss"
import Icon from '../Icon/page'

const SortProperty = () => {
  return (
    <div className={styles["sort-property"]}>
        <div className={styles["sort-property-items"]}>
            <div className={styles["sort-property-items-sorted"]}>
                <ul  className={styles["sort-property-items-sorted-types"]}>
                    <li>All</li>
                    <ul  className={styles["sort-property-items-sorted-types-type"]}> 
                        <li>Name</li>
                        <li>Price range</li>
                        <li>Date add</li>
                        <li>Property type</li>
                    </ul>
                </ul>
                <Icon icon='sort' width={16} height={16} />
            </div>
            <div className={styles["sort-property-items-search"]}>
                <Icon icon='search' width={20} height={20} />
                <input type="text" placeholder='Search' className={styles["sort-property-items-search-input"]} />
            </div>
        </div>
        <div className={styles["sort-property-paganation"]}>
            <small>1-30 of 200</small>
            <div  className={styles["sort-property-paganation-icons"]}>
                <div  className={styles["sort-property-paganation-icons-icon"]}>
                <Icon icon='arrowLeft' />
                </div>
                <div  className={styles["sort-property-paganation-icons-icon"]}>
                    <Icon icon='arrowRight' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SortProperty