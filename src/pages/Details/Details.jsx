import CountUp from 'react-countup';

const Details = () => {
	return (
		<div className="bg-[#0C4B65] md:flex justify-between items-center text-white px-28 py-20">
			<div className="text-center">
				<h1 className="text-5xl font-bold">
					<CountUp
						start={0}
						end={100}
						duration={2}
						separator=","
						prefix=""
						suffix="%"
					/>
				</h1>
				<h4 className="text-2xl font-semibold mt-3">Success Rate</h4>
			</div>
			<div>
				<div className="w-48 h-[.1] my-8 md:my-0 border-t-[3px] md:w-0 md:border-t-0 border-[0.2px] border-gray-500 md:h-[100px]"></div>
			</div>
			<div className="text-center">
				<h1 className="text-5xl font-bold">
					<CountUp
						start={0}
						end={12}
						duration={2}
						separator=","
						prefix=""
						suffix="+"
					/>
				</h1>
				<h4 className="text-2xl font-semibold mt-3">
					Years of Service
				</h4>
			</div>
			<div>
				<div className="w-48 h-[.1] my-8 md:my-0 border-t-[3px] md:w-0 md:border-t-0 border-[0.2px] border-gray-500 md:h-[100px]"></div>
			</div>
			<div className="text-center">
				<h1 className="text-5xl font-bold">
					<CountUp
						start={0}
						end={100}
						duration={2}
						separator=","
						prefix=""
						suffix="K"
					/>
				</h1>
				<h4 className="text-2xl font-semibold mt-3">Students</h4>
			</div>
			<div>
				<div className="w-48 h-[.1] my-8 md:my-0 border-t-[3px] md:w-0 md:border-t-0 border-[0.2px] border-gray-500 md:h-[100px]"></div>
			</div>
			<div className="text-center">
				<h1 className="text-5xl font-bold">
					<CountUp
						start={0}
						end={500}
						duration={2}
						separator=","
						prefix=""
						suffix="+"
					/>
				</h1>
				<h4 className="text-2xl font-semibold mt-3">Courses</h4>
			</div>
		</div>
	);
};

export default Details;
