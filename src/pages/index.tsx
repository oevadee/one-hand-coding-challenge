import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home({ title = "Find your strain", flavors }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/capsules.ico" />
      </Head>

      <main className={styles.main}>
        <label htmlFor="flavors">Choose a flavor:</label>
        <select id="flavors" name="flavors">
          {flavors.map(flavor => (
            <option value={flavor}>{flavor}</option>
          ))}
        </select>
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

const API_KEY = process.env.API_KEY;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://strainapi.evanbusse.com/${API_KEY}/searchdata/flavors`
  );
  const flavors = await res.json();

  console.log(flavors);

  return {
    props: {
      flavors,
    },
  };
};
