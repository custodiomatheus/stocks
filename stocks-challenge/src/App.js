import styles from "./App.module.css";
import { useState } from "react";

import Header from "./components/Header";
import Stocks from "./components/Stocks";
import FavoriteStock from "./components/FavoriteStocks";

function App() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.container_pages}>
          <span className={styles.pages_item}>Ações</span>
          <span className={styles.pages_item}>Favoritos</span>
        </div>
        
        <section className={styles.container_filter}>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="" selected>
              Ordernar por
            </option>
            <option value="price">Preço</option>
            <option value="variation">Variação</option>
          </select>
        </section>
      </div>

      <Stocks filter={filter} />
      {/* <FavoriteStock /> */}
    </>
  );
}

export default App;
