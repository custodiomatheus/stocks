import styles from "./App.module.css";
import { useState } from "react";
import { Provider } from 'react-redux';
import store from "./store";

import Header from "./components/Header";
import Stocks from "./components/Stocks";
import StocksChart from './components/StockChart';

function App() {
  const [filter, setFilter] = useState("");
  const [favorites, setFavorites] = useState(false);

  return (
    <Provider store={store}>
      <main>

        <Header />
        
        <aside className={styles.sidebar}>
          
          <div className={styles.container_filter}>
            <select className={styles.filter} onChange={(e) => setFilter(e.target.value)}>
              <option defaultValue>Ordernar por</option>
              <option value="lowerPrice">Menor preço</option>
              <option value="greaterPrice">Maior preço</option>
              <option value="lowerVariation">Menor Variação</option>
              <option value="greaterVariation">Maior Variação</option>
            </select>
          </div>

          <Stocks filter={filter} favorites={favorites} />
        </aside>

        <section className={styles.container_chart}>
          <div className={styles.container_pages}>
            <span className={styles.pages_item} onClick={() => setFavorites(false)}>Ações</span>
            <span className={styles.pages_item} onClick={() => setFavorites(true)}>Favoritos</span>
          </div>

          <div className={styles.chart}>
            <StocksChart />
            
          </div>
        </section>

      </main>
    </Provider>
  );
}

export default App;
