import styles from "./Sidebar.module.css";
import React from "react";
function footer() {
  return (
    <footer className={styles.footer}>
      &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
    </footer>
  );
}

export default footer;
