import React, { useEffect, useState } from "react";
import styles from "./StrainsList.module.scss";
import { useFlavor } from '../../hooks/FlavorProvider';

interface StrainsListProps {
  API_KEY: string;
}

const StrainsList: React.FC<StrainsListProps> = ({ API_KEY }) => {
  const [strains, setStrains] = useState(null);
  const flavor = useFlavor();

  useEffect(() => {
    if (flavor) {
      const getStrains = async () => {
        const res = await fetch(
          `http://strainapi.evanbusse.com/${API_KEY}/strains/search/flavor/${flavor}`
        );
        const strainData = await res.json();
        setStrains(strainData);
      };
      getStrains();
    }
  }, [flavor]);

  const getColorForStrainRace = (race: string) => {
    let color: string;
    if (race === "indica") {
      color = styles.indica;
    } else if (race === "sativa") {
      color = styles.sativa;
    } else if (race === "hybrid") {
      color = styles.hybrid;
    }
    return color;
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.name}>
          <h2>Strain name</h2>
        </div>
        <div className={styles.race}>
          <h2>Strain race</h2>
        </div>
      </div>
      <div className={styles.strainsContainer}>
        {strains &&
          strains.map((strain) => {
            const raceColor = getColorForStrainRace(strain.race);
            return (
              <div key={strain.id} className={styles.row}>
                <div className={raceColor}>
                  <div className={styles.name}>{strain.name}</div>
                  <div className={styles.race}>{strain.race}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StrainsList;
