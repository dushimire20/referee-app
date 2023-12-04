import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="w-5/6 mx-auto justify-center mt-24 font-bold">
        <div className='xs:flex gap-32'>
            <div className='w-full '>
                <p className='text-[20px] leading-[30px] text-secondary-100'>REFEREE.</p>
                <div className='mt-8'>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium'>250734334333</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>referee@support.rw</p>
                </div>

            </div>

            <div className='w-full ml-44  '>
            <p className='text-[20px] leading-[30px] text-secondary-100 font-medium'>Quick Links</p>
                <div className='mt-8 '>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Our Goal</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Key features</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Testimonials</p>
                    <p className='text-[16px] leading-[20px] text-gray-100 font-medium mt-3'>Contact Us</p>
                </div>
            </div>

            <div className='w-full text-right'>
                <p className='text-[18px] leading-[30px] text-secondary-100 font-medium'>Subscribe</p>

                <Link
                className="text-[14px] leading-[21px] font-medium  text-gray-100 flex gap-8 w-[248px]   pl-8 rounded-[6px] border-2 mt-4" 
                to={"/signIn"}            
              
              >
              <p className='py-2'>Get product updates</p> <span><ArrowRightIcon className=" h-10 w-8 bg-secondary-100 text-primary-100" /> </span>
              </Link>

            </div>

        </div>

    </div>
  )
}

export default Footer;