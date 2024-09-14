import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto justify-center mt-24 font-bold">
        <div className='md:flex md:gap-32'>
            <div className='w-full text-center '>
                <p className='text-[20px] leading-[30px] text-secondary-100'>REFEREE.</p>
                <div className='md:mt-8'>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium'>250734334333</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>referee@support.rw</p>
                </div>

            </div>

            <div className='w-full md:ml-44 text-center md:mt-0 mt-4 '>
            <p className='text-[20px] leading-[30px] text-secondary-100 font-medium'>Quick Links</p>
                <div className='md:mt-8 '>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Our Goal</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Key features</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Testimonials</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Contact Us</p>
                </div>
            </div>

            <div className='w-full md:text-left text-center md:mt-0 mt-4  '>
                <p className='text-[18px] leading-[30px] text-secondary-100 font-medium md:ml-4 '>Subscribe</p>

                <Link
                className=" mx-auto text-[14px] leading-[21px] font-medium  text-gray-100 flex gap-8 w-[248px]   pl-8 rounded-[6px] border-2 mt-4 text-center" 
                to={"/signIn"}            
              
              >
              <p className='py-2'>Get product updates</p> <span><ArrowRightIcon className=" h-10 w-8 bg-secondary-100 text-primary-100" /> </span>
              </Link>

            </div>

        </div>

        <div className="mt-8 w-full border-t-2 border-gray-100 text-center py-8 border-opacity-25 ">
            <p 
            className="  font-poppins text-[16px] font-normal leading-[24px] text-gray-100"
            >&copy;2023 REFEREE. All rights reserved</p>

        </div>

    </div>
  )
}

export default Footer;