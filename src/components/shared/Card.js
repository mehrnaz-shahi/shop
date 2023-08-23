import React from 'react';

// //context
// import { CardContext } from '../../context/CardContextProvider';
//functions
import { shorten } from '../../helper/functions';
//icons
import trash from '../../asset/icons/trash.svg';
// style
import styles from "../../templates/Card.module.css";

// Dispath of redux
import { useDispatch } from "react-redux";

// Actions
import { decrease, increase, removeItem } from '../../features/cart/cartSlicer';


const Card = (props) => {

    // const {dispatch} = useContext(CardContext);
    const dispatch = useDispatch();


    const {image, title, price, quantity} = props.data;
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product'/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick ={() => dispatch(decrease(props.data))}>-</button>:
                    <button onClick ={() => dispatch(removeItem(props.data))}>
                    <img src={trash} alt='trash'   /></button>
                } 
                <button onClick={() => dispatch(increase(props.data))}>+</button>

            </div>
            
        </div>
    );
};

export default Card;