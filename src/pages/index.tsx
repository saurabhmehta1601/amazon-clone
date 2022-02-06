import styles from "../styles/home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className={styles.heroImg}
          alt="img-banner"
        />
      </div>
    </div>
  );
}
