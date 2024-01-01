import React, { useEffect } from "react";
// // Context
// import { productsContext } from '../context/ProductContextProvider';
//component
import Product from "./shared/Product";
// Loading
import Loading from "../utils/preloading/Loading";
//style
import styles from "../styles/Store.module.css";

import { useSelector, useDispatch } from "react-redux";
// Action
import { fetchProducts } from "../features/product/producstSlice";

const Store = () => {
  // Use Redux for fetching data
  const { productList, loading, error } = useSelector(
    (state) => state.productsState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!productList.length) {
      dispatch(fetchProducts());
    }
  }, [productList, dispatch]);

  // // Fetch data by context
  // const products = useContext(productsContext);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>ERROR: {error}</p>
      ) : (
        productList.map((item) => <Product key={item.id} productData={item} />)
      )}
    </div>
  );
};

export default Store;
