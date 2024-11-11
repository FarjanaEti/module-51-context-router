import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authprovider';
  
const Register = () => {
   const {createUser }=useContext(AuthContext)


   const handleRegister=e=>{
      e.preventDefault();
      const name=e.target.name.value
      const email=e.target.email.value
      const password=e.target.pass.value

      createUser(email,password)
      .then(res=>{
         console.log(res.user)
      })
      .catch(error=>{
         console.log(error)
      })
   }
 return (
   <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
   <h1 className="text-3xl text-center font-bold">Register!</h1>
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
    </div>
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
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p>Already have an Account.Go to <Link to='/login'>Log In</Link></p>
</div>
 );
};

export default Register;