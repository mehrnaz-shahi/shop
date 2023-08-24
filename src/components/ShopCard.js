import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {clear, checkout} from "../features/cart/cartSlicer";


// //context
// import { CardContext } from '../context/CardContextProvider';
//component
import Card from "./shared/Card";
//style
import styles from "../styles/ShopCard.module.css";

const ShopCard = () => {
  // // use context
  // const {state, dispatch} = useContext(CardContext);

  // Use Redux for setching data
  const state = useSelector(
    (state) => state.cartsState
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItem.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      {state.itemCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total items: </span> {state.itemCounter}
          </p>
          <p>
            <span>Total payment: </span> {state.totalPrice}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout() )}
            >
              Check out
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch( clear() )}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {
        //checkout
        state.checkout && (
          <div className={styles.complete}>
            <h3>You checked out successfully</h3>
            <Link to="/products">Buy more</Link>
          </div>
        )
      }

      {
        //clear
        !state.checkout && state.itemCounter === 0 && (
          <div className={styles.complete}>
            <h3>Do you want to buy?</h3>
            <Link to="/products">Go back to store</Link>
          </div>
        )
      }
    </div>
  );
};

export default ShopCard;
