import React from 'react';
import { LoginBox } from 'react-adminlte-3'

export function DemoLogin() {
  return (
      <div>
        <LoginBox title="Demo Login" message="Sign in to start your session">
         <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"/>
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
        </form>
        </LoginBox>
      </div>
  );
}

export default { DemoLogin };
