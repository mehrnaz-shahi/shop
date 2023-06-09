import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';
// style
import styles from "../templates/ProductDetails.module.css";


const ProductDetail = () => {
    const data =  useContext(productsContext);

    const {id} = useParams();
    const product =  data[id - 1];
    const {image, title, price, description, category} = product;

   
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category} >{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link to='/products'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;