import Line from "@/assets/Line7.png";
import BasketBall from "@/assets/BasketBall.png";
import {CheckIcon} from '@heroicons/react/20/solid';
import Col7 from "@/assets/Col7.png";
import Col12 from "@/assets/Col12.png";
import P1 from "@/assets/P1.png";
import T1 from "@/assets/T1.png";
import Slider from '@/components/Slider';
import TestimonialCard from '@/components/TestimonialCard';
import testmonials from "@/data/testimonials.json";


const KeyFeatures = () => {
    return (
        <div className="pt-6 justify-center mx-auto">
            <div className="w-[267px] h-[60.46px] mt-16 mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-tight font-normal text-gray-100 text-center">Key
                    features</p>
                <img alt='Line' src={Line}/>
            </div>

            <div className="bg-secondary-100 mt-10">
                <div className="absolute mt-0 md:w-[629.02px] left-0 pl-0 invisible md:visible">
                    <img src={BasketBall} className="pl-0"/>
                </div>

                <section className="mx-auto w-5/6 md:flex justify-between gap-8 h-full mt-12 py-12">
                    <div className="md:h-[70%] md:w-[50%] justify-center text-center w-full">
                        <p className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">Game management</p>
                        <p className="font-normal text-lg md:text-xl lg:text-2xl leading-snug mt-6">
                            Referees are going to be able to manage games according to their availabilities.
                        </p>

                        <span className="flex gap-4 font-normal text-lg md:text-xl lg:text-2xl leading-snug mt-6">
					<CheckIcon className="h-8 w-6 text-primary-100"/>
					<p>Approve availability</p>
				</span>
                        <span className="flex gap-4 font-normal text-lg md:text-xl lg:text-2xl leading-snug mt-4">
					<CheckIcon className="h-8 w-6 text-primary-100"/>
					<p>Arrange games</p>
				</span>
                        <span className="flex gap-4 font-normal text-lg md:text-xl lg:text-2xl leading-snug mt-4">
					<CheckIcon className="h-8 w-6 text-primary-100"/>
					<p>File a complaint when they are not able to make it</p>
				</span>
                    </div>

                    <div className="h-full md:w-[50%] justify-center text-center w-full">
                        <div>
                            <img alt="Key Features" src={Col7}/>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-5/6 mx-auto">
                <div className="md:flex justify-center gap-8 h-full mt-12 py-12 text-center">
                    <div className="md:w-[50%] w-full">
                        <img alt="Key Features" src={Col12}/>
                    </div>
                    <div className="md:w-[50%] justify-center w-full text-center">
                        <p className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter text-secondary-100 mt-12">Game
                            assignment</p>
                        <p className="font-normal text-lg md:text-xl lg:text-2xl leading-snug tracking-tighter text-gray-100 mt-12">
                            Referees will be able to be assigned games and the schedule so that they can prepare
                            accordingly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-secondary-100">
                <div className="w-5/6 mx-auto md:flex space-y-8 md:space-y-0 justify-center gap-8 h-full mt-12 py-12">
                    <div className="md:w-[50%] w-full text-center">
                        <p className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter md:mt-12">Payment
                            tracking</p>
                        <p className="font-normal text-lg md:text-xl lg:text-2xl leading-snug tracking-tighter mt-12">
                            Referees are able to see payments per game and receive payments via the platform. Payments
                            will be provided according to referee’s experience.
                        </p>
                    </div>
                    <div className="md:w-[50%] flex flex-col justify-center w-full text-center">
                        <img alt="Key Features" src={P1}/>
                        <img alt="Key Features" src={T1} className="bg-primary-100 top-0"/>
                    </div>
                </div>
            </div>

            <main className="flex min-h-screen flex-col items-center justify-between py-24">
                <div className="md:w-5/6 mx-auto w-full">
                    <Slider options={{
                        align: "center",
                    }}>
                        {testmonials.map((testimonial, i) => (
                            <div key={i} className="mx-auto flex-[0_0_90%] md:flex-[0_0_20%]">
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    )
}

export default KeyFeatures;