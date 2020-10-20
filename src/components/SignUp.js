import React from 'react';
import '../App.css';

const SignUp = ({ handleUsername, handlePassword, handleCreateAccount }) => {
  return (
    <div className="form-comp cfb">
      <h1>Create an Account!</h1>
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
        <button type='submit' onClick={handleCreateAccount}>Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUp;
