import Layout from '@/components/Layout';
import React, { useState } from 'react';
import Slay from "@/assets/Saly.png";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
type Props = {}

const SignIn = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/login', { 
      email,
      password,
   }).then( Response => {
    if(Response.data.status){
      navigate('/dashboard')
    }
    
   }).catch(err => {
    console.log(err);
   } )
  };
  return (
    <Layout>
        
    <div className=' justify-center mx-auto'>
    <div className="py-10 justify-center mx-auto bg-gradient-to-b from-secondary-100 from-60% to-60% ">
        <div className='w-5/6 mx-auto flex mt-12'>
            <div className='w-full flex-row'>
              <div className="flex justify-center items-center">
               <p className="font-poppins font-semibold text-[49px]">Welcome back!</p>
               <img alt='signup' src={Slay} />

              </div>
              
              <div className='mt-16'>
                <p className='text-[49px] leading-[73.5px] font-semibold text-secondary-100'>Sign Up to </p>
                <p className='text-[30.24px] leading-[45.37px] font-semibold text-secondary-100'>access more features!</p>

              </div>                  

            </div>

            <div className='w-full'>
              <form
              onSubmit={handleSubmit}              
              className='w-[539px] rounded-3xl bg-primary-100 py-12  shadow-lg'>
                <div className='flex mx-auto w-5/6 gap-16 '>
                  <label className='text-gray-100'>Welcome to 
                  <span className='text-secondary-100 font-bold'> ARAB.</span><br />
                  <p className='text-[55px] leading-[82.2px]'>Sign in</p>
                  </label>
                  <label className='text-gray-200 h-[40px]'>
                  No Account ? <br/>
                  <Link to="/signUp" className='text-secondary-100' >Sign up</Link>
                    
                  </label>

                </div>

               <div className='w-5/6 mx-auto  mt-6  gap-12'>
                <div>
                <label className='text-gray-100'>Enter your username or email</label><br />
                      <input 
                      type='email'
                      name='email'
                      placeholder="Email"
                      className=' h-[57px] xs:w-full py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      />

                </div>
                <div className='mt-6'>
                <label className='text-gray-100   '>Enter your Password</label><br  />
                      <input 
                      type='password'
                      name='password'
                      placeholder="Password"
                      className=' h-[57px] xs:w-full py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      />

                </div>
               
              

                <button type='submit' className=' mt-6 text-primary-100 bg-secondary-100 rounded-lg w-[451px] h-[54px]'>
                Sign In
                </button>
                <Link to="/forgotPassword" className='text-secondary-100'> Forgot password</Link>
                
               </div>

              </form>

                
            </div>

        </div>


    </div>

</div>
</Layout>
  )
}

export default SignIn;