import Line from "@/assets/Line7.png";
import GoalImage from "@/assets/GoalImage.png";


const OurGoals = () => {
    return (
        <div className="w-5/6 pt-6 justify-center mx-auto">
            <div className="w-[267px] h-[60.46px] mt-16 mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-tight font-normal text-gray-100 text-center">Our
                    Goal</p>
                <img alt='Line' src={Line}/>
            </div>
            <section className="mx-auto md:flex justify-between gap-8 h-full mt-12">
                <div className="md:h-[70%] md:w-[50%] justify-center w-full text-center">
                    <div>
                        <img alt="Goals" src={GoalImage}/>
                    </div>
                </div>
                <div className="md:h-[70%] md:w-[50%] justify-center text-center w-full">
                    <p className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-100">
                        Easy game management at your fingertips!
                    </p>
                    <p className="font-normal text-lg md:text-xl lg:text-2xl leading-snug text-gray-200 mt-6">
                        We have dedicated ourselves and to the need of our basketball referees in their every day
                        activities towards the game. Now referees can easily be able to navigate and manage their time
                        according to the available games.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default OurGoals;