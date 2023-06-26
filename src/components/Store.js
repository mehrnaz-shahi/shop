import React, {useContext} from 'react';
import { productsContext } from '../context/ProductContextProvider';
//component
import Product from './shared/Product';
//style
import styles from "../templates/Store.module.css";

const Store = () => {

    const products = useContext(productsContext);
    return (
        <div className={styles.container}>
            {
                products.map(item => <Product key={item.id} productData={item}/>)
            }
        </div>
    );
};

export default Store;