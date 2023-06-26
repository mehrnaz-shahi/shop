import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CardContext } from '../context/CardContextProvider';
//component
import Card from './shared/Card';
//style
import styles from "../templates/ShopCard.module.css";

const ShopCard = () => {

    const {state, dispatch} = useContext(CardContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItem.map(item => <Card key={item.id} data={item}/>)
                }
            </div>

            {
                state.itemCounter > 0 && <div className={styles.payments}>
                    <p><span>Total items: </span> {state.itemCounter}</p>
                    <p><span>Total payment: </span> {state.totalPrice}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonContainer} onClick={() => dispatch({type: 'CHECKOUT'})}>Check out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
                    </div>
                </div>
            }

            {
                //checkout
                state.checkout && <div className={styles.complete}>
                    <h3>You checked out successfully</h3>
                    <Link to='/products'>Buy more</Link>
                </div>
            }

            {
                //clear
                !state.checkout && state.itemCounter === 0 &&<div className={styles.complete}>
                    <h3>Do you want to buy?</h3>
                    <Link to='/products'>Go back to store</Link>
                </div>
            }

        </div>
    );
};

export default ShopCard;