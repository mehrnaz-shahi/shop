import React, {useState , useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast.js';
import Styles from '../styles/Signup.module.css';
import { Link } from 'react-router-dom';



const Login = () => {
const [data, setData] = useState({
    email: '',
    password: '',
});

const [errors, setErrors] = useState({});
const [touch, setTouch] = useState({});

useEffect(() => {
    setErrors(validate(data, 'login'));
}, [data, touch])

const changeHandeler = (event) => {

    setTouch({...touch, [event.target.name]: true});

    setData({...data, [event.target.name]: event.target.value})
    
};

const submitHandeler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify('You are loged in successfully', 'success');
        }
        else {
            setTouch({
                email: true,
                password: true,
            });
            notify('Invalid information.', 'error');
        }
      
}

    return (
        <div className={Styles.container}>
            <form onSubmit={submitHandeler} className={Styles.signup}>
                <h1 className={Styles.form_title} id="signup" >Login</h1>
                <div className={Styles.form_holder}>
                        <div className={Styles.input_div}>
                            <label>Email</label>
                            <input 
                                type='email'  
                                className={(errors.email && touch.email) ? Styles.uncomplated : Styles.form_input} 
                                name='email'  
                                value={data.email} 
                                placeholder='email' 
                                onChange={changeHandeler} />
                            {errors.email && touch.email && <span>{errors.email}</span>}
                        </div>
                        <div className={Styles.input_div}>
                            <label>Password</label>
                            <input 
                                type='password'  
                                className={(errors.password && touch.password) ? Styles.uncomplated : Styles.form_input} 
                                name='password'  
                                value={data.password} 
                                placeholder='password' 
                                onChange={changeHandeler}/>
                            {errors.password && touch.password && <span>{errors.password}</span>}
                        </div>
                </div>
                <div className={Styles.formButtons}>
                    <Link to="/signUp">Sign Up</Link>
                    <button type='submit' className={Styles.submit_btn}>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;