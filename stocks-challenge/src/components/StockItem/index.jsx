import styles from './style.module.css';

function StockItem({ company, stock, price, variation,  }) {

  return (
    <>
        <div className={styles.stock__item}>
          <div className={styles.stock__item_name}>
            <h3 className={styles.stock__name}>{company}</h3>
            <h4 className={styles.stock__stock}>{stock}</h4>
          </div>

          <div className={styles.stock__item_value}>
            <p className={styles.stock__price}>R$ {price}</p>
            <p className={(variation < 0 ? styles.stock__variation_negative : styles.stock__variation_positive)}>{variation.toFixed(2).replaceAll('.', ',')}</p>
          </div>

          <p className={styles.stock__variation_complete}>Ver variação completa</p>
        </div>
    </>
  );
}

export default StockItem;
