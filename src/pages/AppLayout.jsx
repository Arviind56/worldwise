import AppNav from "../Components/AppNav";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "..components/Map.jsx";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map></Map>
    </div>
  );
}

export default AppLayout;
