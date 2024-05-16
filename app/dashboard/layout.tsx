import SideBar from "@/component/sidebar/page"
import styles from "./dashboard.module.scss"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
    <div className={styles["dashboard"]}>
      <SideBar />
      {children}
    </div>
  )
    
}