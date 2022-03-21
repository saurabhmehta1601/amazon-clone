import styles from "../styles/home.module.css";
import { Header, Product } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            className={styles.heroImg}
            alt="img-banner"
          />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.productRow}>
            <Product
              id="12sxrun1"
              rating={4}
              title="Cera Moisturizing Cream"
              img_width={150}
              img_height={175}
              price={5}
              image_url="https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_SY400_.jpg"
            />
            <Product
              id="12csdak1"
              rating={5}
              title="IPhone 13"
              img_width={150}
              img_height={175}
              price={1000}
              image_url="https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SY400_.jpg"
            />
          </div>
          <div className={styles.productRow}>
            <Product
              id="3441"
              rating={3}
              title="Oculus VR headset"
              price={50}
              image_url="https://m.media-amazon.com/images/I/61kwRNPtMpL._AC_SY400_.jpg"
            />
            <Product
              id="31"
              rating={5}
              title="OnePlus Earbuds"
              price={200}
              image_url="https://m.media-amazon.com/images/I/61m9BxTyCGL._AC_SY400_.jpg"
            />
            <Product
              id="41"
              rating={3}
              title="Phillips Men's Trimmer"
              price={22}
              image_url="https://m.media-amazon.com/images/I/71YCllvavVL._AC_SY400_.jpg"
            />
          </div>
          <div className={styles.productRow}>
            <Product
              id="3"
              img_width={500}
              img_height={200}
              rating={3}
              title="56 inch LED TED LASSO"
              price={15}
              image_url="https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
