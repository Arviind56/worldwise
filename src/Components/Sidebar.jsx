import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Footer from "./footer";
import Logo from "./Logo";
import AppNav from "./AppNav.jsx";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
