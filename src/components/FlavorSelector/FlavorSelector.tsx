import React from "react";
import styles from "./FlavorSelector.module.scss";

interface Props {
  flavors: [];
  setChosenFlavor: React.Dispatch<string>
}

const FlavorSelector: React.FC<Props> = ({ flavors, setChosenFlavor }) => {  
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Choose a flavor</h2>
      </div>
      <div className={styles.selectorContainer}>
        <small>
          Choose your favorite flavor and we will find a perfect strain for you
        </small>
        <label htmlFor="flavors">Choose a flavor</label>
        <div className={styles.customSelector}>
          <select id="flavors" name="flavors" onChange={(e) => setChosenFlavor(e.target.value)}>
             {flavors.map((flavor) => (
               <option key={flavor} value={flavor}>
                 {flavor}
               </option>
             ))}
          </select>
          <img src="/arrow-down-sign-to-navigate.svg" width="14" />
        </div>
      </div>
    </div>
  );
};

export default FlavorSelector;