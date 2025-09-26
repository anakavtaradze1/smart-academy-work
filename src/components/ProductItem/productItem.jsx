"use client";
import Image from "next/image";
import styles from "./productItem.module.css";

const ProductItem = ({
  product,
  products,
  setProducts,
  setDeletedProducts,
  hideDeleteButton = false,
}) => {
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
    setDeletedProducts((prev) => [...prev, product]);
  };

  return (
    <section className={styles.itemContainer}>
      <Image src={product.image} alt={product.title} width={80} height={100} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.desc}>{product.description}</p>
      <div className={styles.priceWrapper}>
        <p>${product.price}</p>
        <button className={styles.button}>see details</button>
        {hideDeleteButton ? null : (
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteProduct(product.id)}
          >
            Delete this product
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductItem;
