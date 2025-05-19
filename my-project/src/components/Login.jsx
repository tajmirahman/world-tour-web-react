
import { Link, useNavigate } from 'react-router-dom';
import Header from './Mainlayout/Header/Header';
import { useContext, useRef, useState } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../Firebase/firebase.init';

const Login = () => {
    const emailRef= useRef();
    const auth=getAuth(app);
    const navigate=useNavigate();

    const { signInUser } = useContext(authContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                navigate('/')
            })
            // .catch(err=>setError(err.code))
            .catch(err => setError(err.message))
    }

    const handleForgetPassword=()=>{
        const email= emailRef.current.value;
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Email send please check your email')
        })
        .catch(error=>{
            console.log('Error',error)
        })
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
                            <input type="email" name='email' placeholder="example@com" ref={emailRef} class="input input-bordered" required />
                        </div>
                        <div class="form-control relative">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" class="input input-bordered " required />
                            <button
                                type="button"
                                className="absolute top-8 right-20 text-xl text-gray-500"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <label class="label">
                                <a onClick={handleForgetPassword} class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                error && <p className='text-red-600'>{error.split('/')[1].slice(0, 18)}</p>
                            }
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