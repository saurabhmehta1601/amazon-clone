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
              title="HP Pavilion Full touch 512SSD 16GB RAM "
              price={25}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
            <Product
              id="12csdak1"
              rating={2}
              title="SAMSUNG Galaxy s5"
              price={10}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
          </div>
          <div className={styles.productRow}>
            <Product
              id="3441"
              rating={3}
              title="SAMSUNG Galaxy s5"
              price={2}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
            <Product
              id="31"
              rating={1}
              title="SAMSUNG Galaxy s5"
              price={12}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
            <Product
              id="41"
              rating={5}
              title="SAMSUNG Galaxy s5"
              price={22}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
          </div>
          <div className={styles.productRow}>
            <Product
              id="3"
              rating={3}
              title="SAMSUNG Galaxy s5"
              price={22}
              image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
            />
          </div>
        </div>
      </div>
    </>
  );
}
