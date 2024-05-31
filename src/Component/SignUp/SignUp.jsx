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
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'password') {
            checkPasswordStrength(value);
            checkPasswordMatch(value, formData.confirmPassword);
        }

        if (name === 'confirmPassword') {
            checkPasswordMatch(formData.password, value);
        }
    };

    const checkPasswordStrength = (password) => {
        let strength = '';
        if (password.length < 6) {
            strength = 'Weak';
        } else if (password.length < 10) {
            strength = 'Intermediate';
        } else {
            strength = 'Strong';
        }
        setPasswordStrength(strength);
    };

    const checkPasswordMatch = (password, confirmPassword) => {
        if (password && confirmPassword) {
            setPasswordMatch(password === confirmPassword);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
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
                />
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div className='email_Box'>
                <p className='Name'>Email</p>
                <input
                    type="text"
                    name="email"
                    className='input'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div className='email_Box'>
                <p className='Name'>Password</p>
                <div className='error1'><input
                    type="password"
                    name="password"
                    className={`input ${passwordStrength.toLowerCase()}`}
                    value={formData.password}
                    onChange={handleChange}
                />
                {passwordStrength && (
                    <span className={`strength ${passwordStrength.toLowerCase()}`}>
                        {passwordStrength}
                    </span>
                )}
                {errors.password && <span className='error'>{errors.password}</span>}
            </div></div>
            <div className='email_Box'>
                <p className='Name'>Confirm Password</p>
                <div className='error-1'><input
                    type="password"
                    name="confirmPassword"
                    className='input'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {!passwordMatch && (
                    <span className='error'>Passwords do not match</span>
                )}
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
            </div></div>
            <button className='Signup' type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
