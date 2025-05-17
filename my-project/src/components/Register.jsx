
import { Link } from 'react-router-dom';
import Header from './Mainlayout/Header/Header';
import { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const Register = () => {

    const {handleRegisterFrom}= useContext(authContext);

    const handleForm=(e)=>{
        e.preventDefault();
        handleRegisterFrom();
    }


    return (
        <div className='w-11/12 mx-auto space-y-2'>

            <div className='bg-purple-400'>

                <Header></Header>
         

            </div>



            <div class="min-h-screen flex items-center justify-center bg-base-200">
                <div class="w-full max-w-md p-8 space-y-2 bg-base-100 shadow-xl rounded-xl">
                    <h1 class="text-2xl font-bold text-center">Register Now</h1>
                    <form onSubmit={handleForm} class="space-y-2">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Name</span>
                            </label><br />
                            <input type="text" name='name' placeholder="your full name" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Photo Url</span>
                            </label><br />
                            <input type="text" name='photoUrl' placeholder="your photo url" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Email</span>
                            </label><br />
                            <input type="email" name='email' placeholder="email@example.com" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='conPassword' placeholder="password" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <button type="submit" className="btn bg-purple-400">Register</button>
                        </div>
                    </form>
                    <p class="text-sm text-center">if you have an account? <Link to="/login" className="link text-purple-400">login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;