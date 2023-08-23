import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";

//function
import { shorten, isInCard, quantityCounter} from '../../helper/functions';
// //component
// import { CardContext } from '../../context/CardContextProvider';
//icons
import trash from '../../asset/icons/trash.svg';
// Style
import styles from "../../templates/Product.module.css";
// Actions of redux
import { addItem, decrease, increase, removeItem } from '../../features/cart/cartSlicer';


const Product = ({productData}) => {

    // const {state, dispatch} = useContext(CardContext);

      // Use Redux for setching data
  const state = useSelector(
    (state) => state.cartsState
  );
  const dispatch = useDispatch();


    return (
        <div className={styles.container} style={{minHeight: '490px'}}>
            <img className={styles.cardImage} src={productData.image}  alt='' />
            <h2>{shorten(productData.title)}</h2>
            <h3>category: {productData.category}</h3>
            <p>Price: {productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Detail </Link>
               
                <div className={styles.buttonContainer}>
                    {
                        quantityCounter(state, productData.id) === 1 && 
                        <button className={styles.smallButton} 
                            onClick ={() => dispatch(removeItem(productData))}>
                                <img src={trash} alt='trash'  />
                        </button>
                    }

                    {
                        quantityCounter(state, productData.id) > 1 && 
                        <button className={styles.smallButton}
                            onClick ={() => dispatch(decrease(productData))}>-</button>
                    }

                    {quantityCounter(state, productData.id) > 0 && <span className={styles.counter}>{quantityCounter(state, productData.id)}</span>}


                    {
                        isInCard(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button>
                        : <button onClick={() => dispatch(addItem(productData))}>Add to card</button>
                    }
                </div>
            </div>            
        </div>
    );
};

export default Product;