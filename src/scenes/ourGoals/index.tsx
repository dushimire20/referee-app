import React from 'react';
import Line from "@/assets/Line7.png";
import GoalImage from "@/assets/GoalImage.png";

type Props = {}

const OurGoals = (props: Props) => {
  return (
    <div className="w-5/6 pt-6 justify-center mx-auto">
        <div className=" w-[267px] h-[60.46px] mt-8 mx-auto ">
            <p className="text-[32px] leading-[44.8px] font-normal text-gray-100 text-center">Our Goal</p>
            <img alt='Line' src={Line} />

        </div>
        <section className="mx-auto md:flex justify-between gap-8 h-full mt-12">
            <div className="md:h-[70%] md:w-[50%]   justify-center w-full text-center ">
               <div>
               <img alt="Goals" src={GoalImage} />
               </div>

            </div>
            <div className="md:h-[70%] md:w-[50%]   justify-center text-center w-full ">
                <p
                className="font-extrabold text-[56px] leading-[61.6px] text-gray-100"
                >
                Easy game management at your fingertips!
                </p>
                <p
                className="font-normal text-[24px] leading-[38.4px] text-gray-200 mt-6"
                >
                    We have dedicated ourselves and to the need of our basketball referees in their every day activities towards the game. Now referees can easily be able to navigate and manage their time according to the available games.

                </p>

            </div>

        </section>


    </div>
  )
}

export default OurGoals;