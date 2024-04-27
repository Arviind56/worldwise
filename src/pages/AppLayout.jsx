import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../Components/map.jsx";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map></Map>
    </div>
  );
}

export default AppLayout;
