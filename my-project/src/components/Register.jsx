
import { Link, useNavigate } from 'react-router-dom';
import Header from './Mainlayout/Header/Header';
import { useContext, useState } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const Register = () => {

    const { createSignUp, updateUserProfile, userGoogleLogin, userGithubLogin } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (name.length < 4) {
            setError('Name length at least 4 character!')
            return
        }
        if (password != conPassword) {
            setError('Password does not match!');
            return
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;

        if (!regex.test(password)) {
            setError('Password should be contained upercase,lowercase and speciall character and at least 6 character!')
            return
        }

        createSignUp(email, password)
            .then(() => {
                updateUserProfile({
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        // console.log(name,email,password)
    }

    const handleGoogle = () => {
        userGoogleLogin()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleGithub = () => {
        userGithubLogin()
            .then(() => {

                navigate('/');

            })
            .catch(err => console.log(err))
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
                            <input type="text" name='password' placeholder="password" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='conPassword' placeholder="password" class="input input-bordered" required />
                        </div>
                        <div>
                            {
                                error && <p className='text-red-400'>{error}</p>
                            }
                        </div>
                        <div class="form-control">
                            <button type="submit" className="btn bg-purple-400 text-white">Register</button>
                        </div>
                    </form>
                    <p class="text-sm text-center">if you have an account? <Link to="/login" className="link text-purple-400">login</Link></p>
                    <hr />
                    <div className='space-x-3'>
                        <button onClick={handleGoogle} className='btn bg-purple-400 text-white'>With google login</button>
                        <button onClick={handleGithub} className='btn bg-purple-400 text-white'>With github login</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;