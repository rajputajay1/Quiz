import React from 'react'
import "./SignUp.css"
const SignUp = () => {
    return (
        <>
            <div className='email_Box'>
                <p className='Name'>Name</p>
                <input type="text" className='input' />
            </div>
            <div className='email_Box'>
                <p className='Name'>Email</p>
                <input type="text" className='input' />
            </div>
            <div className='email_Box'>
                <p className='Name'>PassWord</p>
                <input type="text" className='input' />
            </div>
            <div className='email_Box'>
                <p className='Name'>Confirm PassWord</p>
                <input type="text" className='input' />
            </div>
            <div className='btns'>

                <button className='Signup'>Sign Up</button>
            </div>

        </>
    )
}

export default SignUp