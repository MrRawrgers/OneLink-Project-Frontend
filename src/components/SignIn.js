import React from 'react';
import '../App.css';


const SignIn = ({ handleUsername, handlePassword, handleLogIn }) => {
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
          Username:
          <br />
          <input onChange={handleUsername} />
        </label>
        <label>
          Password:
          <br />
          <input onChange={handlePassword} type='password' />
        </label>
        <br />
        <button type='submit' onClick={handleLogIn} >Sign In!</button>
      </form>
    </div>
  );
}

export default SignIn;