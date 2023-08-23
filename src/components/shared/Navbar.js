import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


import styles from "../../templates/Navbar.module.css";

// //context
// import { CardContext } from '../../context/CardContextProvider';
//icon 
import shopIcon from '../../asset/icons/shop.svg';



const Navbar = () => {    

    // const {state} = useContext(CardContext);

      // Use Redux for setching data
  const state = useSelector(
    (state) => state.cartsState
  );



    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li><Link to='/'>Home Page</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                    </ul>

                </div>
                <div className={styles.iconContainer}>
                    <Link to='/card'>   
                        <img  src={shopIcon} alt='logo' /> 
                        <span>{state.itemCounter}</span>  
                    </Link>
                </div>
            
            </header>

        </div>
    );
};

export default Navbar;