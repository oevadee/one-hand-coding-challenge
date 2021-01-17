import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/marijuana.svg" width="40" />
      <h1>Find your strain</h1>
    </header>
  );
};

export default Header;
