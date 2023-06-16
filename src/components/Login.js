import React from 'react'
import signpic from '../images/693.jpg';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
   <>
     <section className="sign-in">
      <div className="container mt-5">
      {/* <div className="sigin-image">
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <Link to="/signup" className="signup-image-link">I am already register</Link>
            </div> */}
          <div className="signin-content">
            <h2 className='form-title'>Sign in</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">
                <i class="zmdi zmdi-email materials-icon-name"></i>
                </label>
                <input type="email" name="email" id="email" autoComplete='off' placeholder='Your Email'/>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                <i class="zmdi zmdi-lock materials-icon-name"></i>
                </label>
                <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password'/>
              </div>
              <div className="form-group form-button">
               <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"/>
              </div>
            </form>
            </div>
      </div>
     </section>
   </>
  )
}

export default Login