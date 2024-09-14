import Layout from '@/components/Layout';
import Slay from "@/assets/Saly.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/forgotPassword', { 
          email,
       }).then( Response => {
        if(Response.data.status){
            alert("Check your email for reset password link");
          navigate('/login')
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
                  <img alt='signup' src={Slay} />
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
                      <span className='text-secondary-100 font-bold'> REFEREE.</span><br />
                      <p className='text-[32px]'>Enter your email</p>
                      </label>
                      <label className='text-gray-200 h-[40px]'>
                      Have an Account ? <br/>
                      <Link to="/login" className='text-secondary-100' >Sign in</Link>
                        
                      </label>

                    </div>
                    

                    <div className=' gap-4 mx-auto w-5/6 mt-6'>
                      <div className=''>
                        <label className='text-gray-100'>Email</label><br />
                          <input 
                          type='email'
                          name='email'
                          placeholder="Email Address"
                          className=' h-[57px] w-full py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          />

                      </div>

                     
                   

                    <button type='submit' className=' mt-6 text-primary-100 bg-secondary-100 rounded-lg w-[451px] h-[54px]'>
                    Submit
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

export default ForgotPassword;