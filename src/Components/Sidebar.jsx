import styles from "./Sidebar.module.css";
import Footer from "./footer";
import Logo from "./Logo";
import AppNav from "./AppNav.jsx";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <Footer></Footer>
    </div>
  );
}

export default Sidebar;
