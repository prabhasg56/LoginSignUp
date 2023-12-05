import React from 'react';
import './SignUp.css';

const SignUp = () => {

    return (
        <div className='main-container'>
            <div className="container">
                <h1 className='header'>Sign Up</h1>

                <div>
                    <div className='sub-container'>
                        <label className='label-txt'>User Name</label>
                        <input type="text" className='input-field' />
                    </div>
                    <div className='sub-container'>
                        <label className='label-txt'>Mobile Number</label>
                        <input type="number" className='input-field' />
                    </div>
                    <div className='sub-container'>
                        <label className='label-txt'>Password</label>
                        <input type="password" className='input-field' />
                    </div>
                    <div className='btn-container'>
                        <button className='btn'>Sign Up</button>
                        <button className='btn-cancel'>
                            Cancel
                        </button>
                        <button className='already-acc-txt'>I have an account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;