import styles from './index.css';
import React, { useState } from 'react';
// test
function App() {
  //const [popup, setpopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submit, setsubmit] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setsubmit(true);
  //  setpopup(true);
  };

  const handleCancel = () => {
    setsubmit(true);
   // setpopup(false);
    setSubmitted(false);
  };

  return (
    <div className={styles.App}>
      {submit &&
        <div className=''>
          <div className="">
            <img className='logo' src="/logo.png" alt="Company Logo" />
          </div>
          <div className='main'>
            <div className='form-fields'>
              <div>
                <div>
                  <h1 className='signIn'>Sign In</h1>
                  <div>
                    <form action="" className='signin-form' onSubmit={handleSubmit}>
                      <div className='inputs'>
                        <div>
                          <input type="email" className='form-inp' placeholder='example.email@gmail.com' />
                        </div>
                        <div>
                          <input type="password" className='form-inp' placeholder='Enter at least 8+ characters' />
                        </div>
                      </div>

                      <button type='submit' className='signin-btn'>Sign In</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-cnt'>
            <div className='container'>
              <h1 className='heading'>The Most Comprehensive Amazon Profit Calculator</h1>
              <div className='box'>
                <div className='box-1'>
                  <icon className="icon">	&#10003;</icon>
                </div>
                <div className='box-2'> 
                  <p className='para'>Calculate precise Margins Across Local, Regional and National Regions</p>
                </div>
              </div>
              <div className='box'>
                <div className='box-1'>
                  <icon className="icon">	&#10003;</icon>
                </div>
                <div className='box-2'>
                  <p className='para'>Simulate Profits at Different Prices</p>
                </div>
              </div>
              <div className='box'>
                <div className='box-1'>
                  <icon className="icon">	&#10003;</icon>
                </div>
                <div className='box-2'>
                  <p className='para'>Simulate Profits at Different Discounts</p>
                </div>
              </div>
              <a href="http://app.sellersquare.in/free-ecommerce-tools/margin-analyser/amazon-margin-calculator"><button className='calculator-btn' type="submit"> Free Amazon Profit Calculator </button></a>
            </div>
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
