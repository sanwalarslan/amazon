import React from 'react';
import './Register.css';

const subtitle="save the day";
const title= (
    <h2 className='title'>Join on Day Long Free Workshop for <b>Advance</b><span>Mastering</span>on Sales</h2>

)
const desc="Limited time offer! Hurry up";
const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
<div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
    <div className='col'>
        <div className="section-header justify-content-center">
            <span className='subtitle'>
             {subtitle}
            </span>{title}
             <p>{desc}</p>
        </div>
    </div>
    <div className="col">
        <div className="section-wrapper">
            <h4>Register Now</h4>
            <form className='register-form'>
            <input type="text" name="name" placeholder='Username'className='reg-input'></input>
            <input type="email" name="email" placeholder='Email'className='reg-input'></input>
            <input type="number" name="number" placeholder='Phone'className='reg-input'></input>
 <button type="submit" className='lab-btn'>Register Now</button>
 </form>
        </div>
    </div>
</div>
    </section>
  )
}

export default Register