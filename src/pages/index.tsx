import styles from "../styles/home.module.css";
import Product from "../components/Product";

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
      <div className={styles.productsContainer}>
        <div className={styles.productRow}>
          <Product
            id="12341"
            rating={4}
            title="HP Pavilion Full touch 512SSD 16GB RAM "
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
          <Product
            id="12341"
            rating={2}
            title="SAMSUNG Galaxy s5"
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
        </div>
        <div className={styles.productRow}>
          <Product
            id="12341"
            rating={3}
            title="SAMSUNG Galaxy s5"
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
          <Product
            id="12341"
            rating={1}
            title="SAMSUNG Galaxy s5"
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
          <Product
            id="12341"
            rating={5}
            title="SAMSUNG Galaxy s5"
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
        </div>
        <div className={styles.productRow}>
          <Product
            id="12341"
            rating={3}
            title="SAMSUNG Galaxy s5"
            price="22"
            image_url="https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=250"
          />
        </div>
      </div>
    </div>
  );
}
