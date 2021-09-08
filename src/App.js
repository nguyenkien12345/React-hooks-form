import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [userInfo, setUserInfo] = useState();

  const onHandleSubmit = (data) => {
    setUserInfo(data);
  }

  // Debug errors
  // console.log(errors);

  return (
    <div className="container">

      {/* Debug here */}
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Name: ' {...register('username', { required: "Username is required" })}/>
          </div>
          <p>{errors.username?.message}</p>
          <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email: '  {...register('email', { required: "Email is required", pattern:{value: /^\S+@\S+$/i, message: "This is not a valid email"}})}/>
          </div>
          <p>{errors.email?.message}</p>
          <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password: ' {...register('password', { required: "Password is required", minLength:{value: 4, message:  "Password must be more than 4 characters" }, maxLength:{value: 64, message: "Passwords can not exceed than 64 characters"} })}/>
          </div>
          <p>{errors.password?.message}</p>
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
