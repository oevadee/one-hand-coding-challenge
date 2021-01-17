import React, { createContext, useState } from "react";
import Head from "next/head";
import FlavorSelector from "../components/FlavorSelector/FlavorSelector";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import StrainsList from "../components/StrainsList/StrainsList";

interface Props {
  title: string;
  API_KEY: string
  flavors: [],
}

export const FlavorContext = createContext(null);

const Home: React.FC<Props> = ({ title = "Find your strain", flavors, API_KEY }) => {
  const [chosenFlavor, setChosenFlavor] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/capsules.ico" />
      </Head>

      <Header />

      <FlavorContext.Provider value={chosenFlavor}>
        <FlavorSelector setChosenFlavor={setChosenFlavor} flavors={flavors} />
        <StrainsList API_KEY={API_KEY} />
      </FlavorContext.Provider>

      <main></main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `http://strainapi.evanbusse.com/${API_KEY}/searchdata/flavors`
  );
  const flavors: [] = await res.json();

  return {
    props: {
      flavors,
      API_KEY
    },
  };
};