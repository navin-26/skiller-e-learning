import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post('http://localhost:5000/auth/login', {
                email, password
            });
            const redirectTo = localStorage.getItem('redirectAfterLogin') || '/';
            localStorage.removeItem('redirectAfterLogin');
            navigate(redirectTo, { data : data });
        }
        catch(err){
            setError(err.message);
        }
    }
    
  return (
    <div className="w-full h-100 bg-black flex justify-content-center text-center">
        <div className="w-2/6 max-w-full px-3 m-auto my-40 shrink-0">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5>Login with</h5>
                </div>
                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                    <div className="w-full max-w-full px-1 mr-auto flex-0 text-center">
                        <a className="inline-block px-6 py-3 mb-4 font-bold text-center text-black-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                            <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 64" height="32px" width="24px">
                                <g fill="none" stroke="none">
                                <g transform="translate(3.000000, 2.000000)">
                                    <path fill="#4285F4" d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"></path>
                                    <path fill="#34A853" d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"></path>
                                    <path fill="#FBBC05" d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"></path>
                                    <path fill="#EB4335" d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"></path>
                                </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0 flex flex-row">
                        <hr className='w-1/2 my-2.5 border-black' />
                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                        <hr className='w-1/2 my-2.5 border-black' />
                    </div>
                </div>
                <div className="flex-auto px-6 py-5">
                    <form role="form text-left" onSubmit={loginHandler}>
                        <div className="mb-4">
                            <input 
                                aria-describedby="email-addon" 
                                aria-label="Email" 
                                placeholder="Email" 
                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" 
                                type="email"
                                value = {email}
                                onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <div className="mb-4">
                            <input 
                                aria-describedby="password-addon" 
                                aria-label="Password" 
                                placeholder="Password" 
                                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" 
                                type="password"
                                value = {password}
                                onChange={(e) => setPassword(e.target.value)}
                             />
                        </div>
                        <div className="text-center">
                            <button className="inline-block w-full px-6 py-3 mt-3 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="submit">Login</button>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-sm">
                            Don't have an account? <Link to='/signup' className="font-bold text-slate-700">Register</Link>
                        </p>
                    </form>
                    {error && <p style={{color:'red'}}>{error}</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInPage;