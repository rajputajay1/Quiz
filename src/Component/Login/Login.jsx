import React, { useState } from 'react';
import "./Login.css";
import SignUp from '../SignUp/SignUp';

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
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
                        <div className='form'>
                            <div className='email_Box'>
                                <p className='email'>Email</p>
                                <input type="text" className='input' />
                            </div>
                            <div className='email_Box'>
                                <p className='email'>Password</p>
                                <input type="password" className='input' />
                            </div>
                            <div className='btns'>
                                <button className='Login'>Login</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
