import styles from "./App.module.css";
import { useState } from "react";
import { Provider } from 'react-redux';
import store from "./store";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StocksChart from './components/StockChart';

function App() {
  const [favorites, setFavorites] = useState(false);

  return (
    <Provider store={store}>
      <main>

        <Header />
        
        <Sidebar favorites={favorites} />

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
