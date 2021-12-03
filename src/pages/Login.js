import React from 'react';

import {
  Link
} from "react-router-dom";


const Login = () => {
    return ( 
        <>
    <div className='hold-transition login-page'>
<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Mantenedor </b>Sadech</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Ingresa a tu sesión</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <br />
        
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Recordar Usuario
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            
              <Link to='/home' className="btn btn-primary btn-block">
                Ingresar</Link>
            
          </div>
          {/* /.col */}
        </div>
      </form>
 
   <br />
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">Olvidaste tu contraseña?</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Solicita tu registro al Administrador</a>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</div>
        </>
     );
}
 
export default Login;