import styles from "./ProductCard.module.css";

function ProductCard({ name, price, brand }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <p>{price.toLocaleString()}원</p>
      <p>{brand}</p>
    </article>
  );
}

export default ProductCard;
