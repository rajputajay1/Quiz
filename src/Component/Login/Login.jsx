import React, { useState } from 'react';
import "./Login.css";
import SignUp from '../SignUp/SignUp';

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [loginErrors, setLoginErrors] = useState({});

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const validateLogin = () => {
        const newErrors = {};
        if (!loginData.email) newErrors.email = "Email is required";
        if (!loginData.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateLogin();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Login data:", loginData);
        } else {
            setLoginErrors(validationErrors);
        }
    };

    return (
        <div className='main_login'>
            <div className='main'>
                <div className='all_content'>
                    <div className='Quiz_parent'>
                        <p className='Quiz'>QUIZZIE</p>
                    </div>
                    <div className='btns'>
                        <button
                            className={`btn ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signup')}
                        >
                            Sign Up
                        </button>
                        <button
                            className={`btn ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login
                        </button>
                    </div>
                    <div>
                        {activeTab === 'signup' ? <SignUp /> : (
                            <form className='form' onSubmit={handleLoginSubmit}>
                                <div className='email_Box'>
                                    <p className='email'>Email</p>
                                    <input
                                        type="text"
                                        name="email"
                                        className='input'
                                        value={loginData.email}
                                        onChange={handleLoginChange}
                                        placeholder={loginErrors.email }
                                    />
                                </div>
                                <div className='email_Box'>
                                    <p className='email'>Password</p>
                                    <input
                                        type="password"
                                        name="password"
                                        className='input'
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        placeholder={loginErrors.password }
                                    />
                                </div>
                                <div className='btns'>
                                    <button className='Login' type="submit">Login</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
