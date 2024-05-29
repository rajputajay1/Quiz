import React, { useState } from 'react';
import "./SignUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "asdfg do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form data:", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='email_Box'>
                <p className='Name'>Name</p>
                <input
                    type="text"
                    name="name"
                    className='input'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={errors.name}
                />
            </div>
            <div className='email_Box'>
                <p className='Name'>Email</p>
                <input
                    type="text"
                    name="email"
                    className='input'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={errors.email}

                />
            </div>
            <div className='email_Box'>
                <p className='Name'>Password</p>
                <input
                    type="password"
                    name="password"
                    className='input'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={errors.password}
                />
            </div>
            <div className='email_Box'>
                <p className='Name'>Confirm Password</p>
                <input
                    type="password"
                    name="confirmPassword"
                    className='input'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder={errors.confirmPassword}
                />
            </div>
            <button className='Signup' type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
