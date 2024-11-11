import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const handleLogIN=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.pass.value;
    console.log(email,password)
  }
 return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
       <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogIN} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>New to this website? Please go to <Link to='/register'>Register</Link></p>
    </div>

   );
};

export default LogIn;