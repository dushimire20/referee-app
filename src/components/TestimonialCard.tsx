type Props = {
	name: string;
	title: string;
	image_url: string;
	text: string;
}

const TestimonialCard = (props: Props) => {
	return (

		<div className="p-5 rounded-3xl xs:w-[412px]  w-full shadow-lg">
			<p
				className="text-[20px] leading-[32px] text-gray-100 font-normal tracking-wider"
			>{props.text}</p>
			<div className=" flex justify-between items-center gap-3 w-full mt-3">
				<img className="w-[64px] h-[64px] rounded-full object-cover" src={props.image_url} />
				<div className="flex-1 flex flex-col w-[268px]">
					<p className="text-gray-100 text-[16px] leading-[22.7px] font-medium">{props.name}</p>
					<p className='text-gray-200 text-[16px] leading-[22.7px] font-medium'>{props.title}</p>
				</div>

			</div>
		</div>

	)
}

export default TestimonialCard;