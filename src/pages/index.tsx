import React from "react";
import Head from "next/head";
import FlavorSelector from "../components/FlavorSelector/FlavorSelector";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";

interface Props {
  title: string;
  flavors: [];
}

const Home: React.FC<Props> = ({ title = "Find your strain", flavors }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/capsules.ico" />
      </Head>

      <Header />
      <FlavorSelector flavors={flavors} />

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
    },
  };
};
