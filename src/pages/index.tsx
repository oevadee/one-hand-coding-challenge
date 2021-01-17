import React from "react";
import Head from "next/head";
import FlavorSelector from "../components/FlavorSelector/FlavorSelector";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import { FlavorProvider } from "../flavorContext";
import StrainsList from "../components/StrainsList/StrainsList";

interface Props {
  title: string;
  API_KEY: string
  flavors: [],
}

const Home: React.FC<Props> = ({ title = "Find your strain", flavors, API_KEY }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/capsules.ico" />
      </Head>

      <Header />

      <FlavorProvider>
        <FlavorSelector flavors={flavors} />
        <StrainsList API_KEY={API_KEY} />
      </FlavorProvider>

      <main className={styles.main}></main>

      <footer className={styles.footer}>footer</footer>
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