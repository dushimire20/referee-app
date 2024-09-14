import React from 'react';
import Layout from '@/components/Layout';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import LogoGray from "@/assets/Logo-grey.png";
import ArtVenue from "@/assets/ArtVenue.png";
import Zoomer from "@/assets/Zoomer.png";
import Shells from "@/assets/Shells.png";
import Waves from "@/assets/Waves.png"
import OurGoals from '../ourGoals';
import KeyFeatures from '../keyFeatures';
import ContactUs from '../contactUs';
import Footer from '../footer';


const Home: React.FC = () => {
  return (
    <Layout >
      <div>
        <section className="py-10  md:pb-0  mx-0 items-center justify-center h-full w-full bg-[url('@/assets/HeroImage.png')] bg-cover">
          <div className="mx-auto items-center justify-center w-5/6  ">
            <div className=" mt-16 md:mt-[195px] py-8 md:w-[904px]">
              <p
              className="text-[72px] leading-[79.2px] font-extrabold"
              >Basketball Referee work has never been easier!</p>
              <p
              className="text-[32px] font-normal leading-[35.2px] mt-6"
              >Join other referees and enjoy managing your work!</p>

              <Link
                className="text-[20px] leading-[24px] font-medium  bg-secondary-100 flex gap-2 w-[303px] justify-center py-4 rounded-xl mt-4" 
                to={"/signIn"}            
              
              >
              Get Started <span><ArrowRightIcon className="h-6 w-6 text-primary-100" /> </span>
              </Link>

            </div>
          </div>
        </section>  
        <section className=" items-center justify-center h-[60px]  w-full bg-gray-200">
        <div className=" py-5 mx-auto   md:pb-0  mt-0  w-5/6 hidden md:block">
          <div className="mx-auto ">
            <div className="text-center  flex w-full items-center justify-between gap-4 ">
            <img alt="smart-finder-sponsor" src={LogoGray} />
            <img alt="Zoomer-sponsor" src={Zoomer} />
            <img alt="shells-sponsor" src={Shells} />
            <img alt = "Waves-sponsor" src={Waves} />
            <img alt = "ArtVenue" src={ArtVenue} />
            </div>
          </div>
        </div>
          
        </section> 
        <OurGoals /> 
        <KeyFeatures />  
        <ContactUs />
        <Footer />

      </div>

    </Layout>

  )
}

export default Home;