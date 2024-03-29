import React from 'react';
import { useParams } from 'react-router-dom';
// // context
// import { productsContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';
// style
import styles from "../styles/ProductDetails.module.css";
// Redux 
import { useSelector } from 'react-redux';


const ProductDetail = () => {
    // // use context
    // const data =  useContext(productsContext);

    // use redux
    const data = useSelector(
        (state) => state.productsState.productList
      );
    

    const {id} = useParams();
    const product =  data[id - 1];
    const {image, title, price, description, category} = product;

   
    return (
        <div className={styles.container}>
            <img className={styles.image + ' prod-img'} src={image} alt='product' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category} >{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link to='/products' className='back-btn'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;