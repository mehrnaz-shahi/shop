import React, {useState , useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast.js';
import Styles from '../templates/Signup.module.css';
import '../templates/box.css';
import { Link } from 'react-router-dom';



const SignUp = () => {
const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
});

const [errors, setErrors] = useState({});
const [touch, setTouch] = useState({});

useEffect(() => {
    setErrors(validate(data, 'signup'));
}, [data, touch])

const changeHandeler = (event) => {

    setTouch({...touch, [event.target.name]: true});

    if(event.target.name === 'isAccepted'){
        setData({...data, [event.target.name]: event.target.checked})
    }
    else{
        setData({...data, [event.target.name]: event.target.value})
    }
};

// const focusHandeler = event => {
//     setTouch({...touch, [event.target.name]: true});
// }


const submitHandeler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify('You are sign up successfully', 'success');
        }
        else {
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            });
            notify('Invalid information.', 'error');

        }
      
}

    return (
        <div className={Styles.container}>
            <form onSubmit={submitHandeler} className={Styles.signup}>
                <h1 className={Styles.form_title} id="signup" >Sign Up</h1>
                <div className={Styles.form_holder}>
                        <div className={Styles.input_div}>
                            <label>Name</label>
                            <input 
                                type='text' 
                                className={(errors.name && touch.name) ? Styles.uncomplated : Styles.form_input}  
                                name='name'  
                                value={data.name} 
                                placeholder='name' 
                                onChange={changeHandeler}/>
                            
                            {errors.name && touch.name && <span>{errors.name}</span>}
                        </div>
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
                        <div className={Styles.input_div}>
                            <label>Confirm password</label>
                            <input 
                                type="password" 
                                 className={(errors.confirmPassword && touch.confirmPassword) ? Styles.uncomplated : Styles.form_input} 
                                name='confirmPassword' 
                                value={data.confirmPassword} 
                                placeholder='confirm password' 
                                onChange={changeHandeler}/>
                            {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}
                        </div>
                        <div className={Styles.accept_div}>
                            <div className={Styles.chekbox_div}>
                                    <label>I accepted terms of privacy policy</label>

                                    <div className="checkbox-wrapper-12">
                                    <div className="cbx">
                                        <input id="cbx-12"
                                         type="checkbox"  
                                         name='isAccepted'  
                                        value={data.isAccepted}
                                        onChange={changeHandeler} />
                                        <label ></label>
                                        <svg className='svgBox' width="15" height="14"  fill="none">
                                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                                        </svg>
                                    </div>
                                    
                                    </div>
                            </div>
                            {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                        </div>
                </div>
                <div className={Styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type='submit' className={Styles.submit_btn}>Sing Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;