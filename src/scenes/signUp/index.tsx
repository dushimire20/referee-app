import Layout from '@/components/Layout';
import React from 'react';
import Slay from "@/assets/Saly.png";
import { Link } from 'react-router-dom';

type Props = {}

const SignUp: React.FC = (props: Props) => {
  return (
    <Layout>
        
        <div className=' justify-center mx-auto'>
        <div className="py-10 justify-center mx-auto bg-gradient-to-b from-secondary-100 from-60% to-60% ">
            <div className='w-5/6 mx-auto flex mt-12'>
                <div className='w-full flex-row'>
                  <img alt='signup' src={Slay} />
                  <div className='mt-16'>
                    <p className='text-[49px] leading-[73.5px] font-semibold text-secondary-100'>Sign Up to </p>
                    <p className='text-[30.24px] leading-[45.37px] font-semibold text-secondary-100'>access more features!</p>

                  </div>                  

                </div>

                <div className='w-full'>
                  <form className='w-[539px] rounded-3xl bg-primary-100 py-12  shadow-lg'>
                    <div className='flex mx-auto w-5/6 gap-16 '>
                      <label className='text-gray-100'>Welcome to 
                      <span className='text-secondary-100 font-bold'> REFEREE.</span><br />
                      <p className='text-[55px] leading-[82.2px]'>Sign up</p>
                      </label>
                      <label className='text-gray-200 h-[40px]'>
                      Have an Account ? <br/>
                      <Link to="/signIn" className='text-secondary-100' >Sign in</Link>
                        
                      </label>

                    </div>
                    <div className='w-5/6 mx-auto '>
                      <label className='text-gray-100'>Enter your username or email address</label>

                      <div className='flex gap-4'>
                      <input 
                      type='text'
                      name='name'
                      placeholder="Full names"
                      className='mt-2 h-[57px] xs:w-[216px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                      required
                      />

                      <input 
                      type='text'
                      name='name'
                      placeholder="Full names"
                      className='mt-2 h-[57px] xs:w-[216px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                      required
                      />                    

                      </div>

                    </div>

                    <div className='flex gap-4 mx-auto w-5/6 mt-6'>
                      <div className=''>
                        <label className='text-gray-100'>User name</label><br />
                          <input 
                          type='email'
                          name='email'
                          placeholder="Email Address"
                          className=' h-[57px] xs:w-[216px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                          required
                          />

                      </div>

                      <div className=''>
                      <label className='text-gray-100'>Contact Number</label><br />
                          <input 
                          type='phone'
                          name='phone'
                          placeholder="Contact Number"
                          className=' h-[57px] xs:w-[216px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                          required
                          />

                      </div>

                   </div> 
                   <div className='w-5/6 mx-auto  mt-6  gap-12'>
                    <div>
                    <label className='text-gray-100'>Enter your Password</label><br />
                          <input 
                          type='password'
                          name='password'
                          placeholder="Password"
                          className=' h-[57px] xs:w-full py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                          required
                          />

                    </div>
                    <div className='mt-6'>
                    <label className='text-gray-100   '>Confirm Password</label><br  />
                          <input 
                          type='password'
                          name='password'
                          placeholder="Password"
                          className=' h-[57px] xs:w-full py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                          required
                          />

                    </div>
                   
                  

                    <button className=' mt-6 text-primary-100 bg-secondary-100 rounded-lg w-[451px] h-[54px]'>
                    Sign up
                    </button>
                   </div>

                  </form>

                    
                </div>

            </div>


        </div>

    </div>
    </Layout>

  )
}

export default SignUp;