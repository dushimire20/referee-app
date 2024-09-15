import Line from "@/assets/Line7.png";


const ContactUs = () => {
	return (
		<div className="w-5/6 mx-auto justify-center  ">
			<div className=" w-[267px] h-[60.46px] mt-8 mx-auto py-7 ">
				<p className="text-[32px] leading-[44.8px] font-normal text-gray-100 text-center">Contact us</p>
				<img alt='Line' src={Line} />

			</div>

			<form className="md:flex w-full  gap-6 mt-24 py-4">

				<div className=" w-full md:flex-row  ">
					<div className="gap-4">
						<label className="text-gray-100 md:text-[19.44px] md:leading-[29.16px] font-normal mt-4 md:block hidden">Your names</label>
						<input
							type='text'
							name='name'
							placeholder="Full names"
							className='mt-2 w-full md:h-[66px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  md:text-[20px]'
							required
						/>
					</div>
					<div className='mt-2'>
						<label className="text-gray-100 text-[19.44px] leading-[29.16px] font-normal mt-4 md:block hidden">Your email address</label>
						<input
							type='text'
							name='name'
							placeholder="Full names"
							className='mt-2 w-full md:h-[66px] py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
							required
						/>
					</div>
					<div className='mt-2'>
						<label className="text-gray-100 text-[19.44px] leading-[29.16px] font-normal mt-4 md:block hidden">Phone number</label>
						<input
							type='text'
							name='name'
							placeholder="Full names"
							className='mt-2 w-full md:h-[66px]  py-2 px-2  text-gray-100 border-secondary-100 rounded-lg outline-none border-2 font-medium  xs:text-[20px]'
							required
						/>
					</div>


				</div>

				<div className="w-full flex-row mt-8 md:mt-0 text-center ">
					<textarea
						rows={7}
						name='message'
						placeholder='Type your message here...'
						className='w-full h-[187px] py-4 px-6  text-gray-200 rounded-lg outline-none border-2 font-medium xs:placeholder:text-[20px] xs:text-[20px]'
						required
					/>

					<button
						type='submit'
						className='w-[303px] bg-secondary-100  py-3 rounded-[12px] h-[65px] md:ml-[240px] mt-4 '
					>
						Submit
					</button>

				</div>


			</form>


		</div>
	)
}

export default ContactUs;