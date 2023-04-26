import styles from './index.css';
import React, { useState, useEffect } from 'react';
// test
function App() {
  const [popup, setpopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const[submit, setsubmit] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setsubmit(true);
    setpopup(true);
  };

  const handleCancel = () => {
    setsubmit(true);
    setpopup(false);
    setSubmitted(false);
  };

  return (
    <div className={styles.App}>
      {submit &&
      <div>
      <div className="">
        <img className='logo' src="/logo.png" alt="Company Logo" />
      </div>
      <div>
        <div>
          <h1 className='signIn'>Sign In</h1>
          <form action="" className='signin-form' onSubmit={handleSubmit}>
            <input type="email" className='form-inp-1' placeholder='example.email@gmail.com' />
            <input type="password" className='form-inp-2' placeholder='Enter at least 8+ characters' />
            <div>
              <div>
                <label className='label-one'>Remember Me</label>
                <input type="checkbox" className='form-inp-3'></input>
                <a href="" className='forgot-pswd' >Forgot password?</a>
              </div>
            </div>
            <button type='submit' className='signin-btn'>Sign In</button>
          </form>
        </div>
        <div className='container'>
          <h1 className='heading'>The Most Comprehensive Amazon Profit Calculator</h1>
          <p className='para-1'>Calculate precise Margins Across Local, Regional and Naional Regions</p>
          <p className='para-2'>Simulate Profits at Different Prices</p>
          <p className='para-3'>Simulate Profits at Different Discounts</p>
          <a href="http://app.sellersquare.in/free-ecommerce-tools/margin-analyser/amazon-margin-calculator"><button className='calculator-btn' type="submit"> Free Amazon Profit Calculator </button></a>
        </div>
      </div>
          </div>
}
      {submitted &&
        <div className='hidden'>
          <div className='popup'>
            <p className='popupText'>We are currently not allowing new user sign up on the portal. Please reach out to support@sellersquare.in for further details</p>
            <button type="submit" className='popup-btn' onClick={handleCancel} href="">Cancel</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
