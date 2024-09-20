type Props = {
    name: string;
    title: string;
    image_url: string;
    text: string;
}

const TestimonialCard = (props: Props) => {
    return (

        <div className="p-5 rounded-3xl xs:w-[412px] m-6 w-full shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl leading-snug text-gray-100 font-normal tracking-wider">
                {props.text}
            </p>
            <div className="flex justify-between items-center gap-3 w-full mt-3">
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
                     src={props.image_url}/>
                <div className="flex-1 flex flex-col w-full md:w-[268px]">
                    <p className="text-gray-100 text-base md:text-lg lg:text-xl leading-tight font-medium">
                        {props.name}
                    </p>
                    <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-tight font-medium">
                        {props.title}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default TestimonialCard;