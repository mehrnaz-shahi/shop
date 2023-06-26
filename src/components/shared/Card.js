import React,{useContext} from 'react';

//context
import { CardContext } from '../../context/CardContextProvider';
//functions
import { shorten } from '../../helper/functions';
//icons
import trash from '../../asset/icons/trash.svg';
// style
import styles from "../../templates/Card.module.css";

const Card = (props) => {

    const {dispatch} = useContext(CardContext);

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
                    <button onClick ={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>:
                    <button onClick ={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}>
                    <img src={trash} alt='trash'   /></button>
                } 
                <button onClick={() => dispatch({type: 'INCREASE', payload: props.data})}>+</button>

            </div>
            
        </div>
    );
};

export default Card;