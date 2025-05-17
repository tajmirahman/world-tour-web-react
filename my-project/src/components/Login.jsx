
import { Link } from 'react-router-dom';
import Header from './Mainlayout/Header/Header';
import { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const Login = () => {

    const {signInUser}=useContext(authContext);

    const handleForm=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password= e.target.password.value;

        signInUser(email,password)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }


    return (
        <div className='w-11/12 mx-auto space-y-2'>

            <div className='bg-purple-400'>
                <Header></Header>
            </div>



            <div class="min-h-screen flex items-center justify-center bg-base-200">
                <div class="w-full max-w-md p-8 space-y-4 bg-base-100 shadow-xl rounded-xl">
                    <h1 class="text-2xl font-bold text-center">Login Now</h1>
                    <form onSubmit={handleForm} class="space-y-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Email</span>
                            </label><br />
                            <input type="email" name='email' placeholder="example@com" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control">
                            <button type="submit" class="btn bg-purple-400">Login</button>
                        </div>
                    </form>
                    <p class="text-sm text-center">Don’t have an account? <Link to={'/register'} class="link text-purple-400">register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;