import styles from './style.module.css';

import stocks from '../../stocks.json';
import StockItem from '../StockItem';

function Stocks({ filter }) {

  return (
    <main className={styles.container}>
      <section className={styles.container_stocks}>
        <div className={styles.stocks__exchange}>
          <h2 className={styles.exchange_title}>Ações Brasileiras</h2>
          <div className={styles.exchange_stock}>
            {
              (filter === "price" ?
                stocks.sort((a, b) => { return a.price - b.price }) :
                stocks.sort((a, b) => { return a.variation - b.variation }))
                .map(stock =>
                  stock.exchange === "B3" ? <StockItem key={stock.stock} company={stock.company} stock={stock.stock} price={stock.price} variation={stock.variation} />
                    : ""
                )
            }
          </div>
        </div>

        <div className={styles.stocks__exchange}>
          <h2 className={styles.exchange_title}>Ações Estrangeiras (BDRs)</h2>
          <div className={styles.exchange_stock}>
            {
              (filter === "price" ?
                stocks.sort((a, b) => { return a.filter - b.filter }) :
                stocks.sort((a, b) => { return a.filter - b.filter }))
                .map(stock =>
                  stock.exchange === "NASDAQ" ? <StockItem key={stock.stock} company={stock.company} stock={stock.stock} price={stock.price} variation={stock.variation} />
                    : ""
                )
            }
          </div>
        </div>

      </section>

    </main>
  );
}

export default Stocks;
