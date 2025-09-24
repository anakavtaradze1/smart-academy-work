"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className={styles.container}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            products={products}
            setProducts={setProducts}
            deletedProducts={deletedProducts}
            setDeletedProducts={setDeletedProducts}
          />
        ))}
      </section>

      {deletedProducts.length > 0 ? (
        <section className={styles.deletedProducts}>
          <h2>Deleted Products</h2>
          <div className={styles.container}>
            {deletedProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                hideDeleteButton={true}
              />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
