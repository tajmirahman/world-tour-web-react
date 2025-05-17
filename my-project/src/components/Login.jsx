import React from 'react';

const Login = () => {
    return (
        <div className=" bg-purple-500 mt-20">
                <div className="md:w-2/6 mx-auto card bg-base-100 w-full shrink-0 shadow-xl ">
                    <div className="card-body ">
                        <form className="fieldset justify-center">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 w-2/6 mx-auto">Login</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Login;