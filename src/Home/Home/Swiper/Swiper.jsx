import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SectionTitle from '../../../components/SectionTitle';

// https://i.ibb.co/BtrQMrT/drumist.jpg
// https://i.ibb.co/hgchjsy/gutarist.jpg
// https://i.ibb.co/09B0HGj/pianist.jpg
// https://i.ibb.co/T4vWvYh/saxophonist11.jpg
// https://i.ibb.co/SBSNhg1/trumpetist.jpg
// https://i.ibb.co/4jjyws3/violinist.jpg

const Swiper = () => {
	return (
		<div className="pb-20">
			<SectionTitle
				subHeading="Gallery"
				heading="Popular Collection"
			></SectionTitle>
			<Fade duration={5000}>
				<div className="grid md:grid-cols-3 mx-24 gap-4">
					<div>
						<img
							className="md:w-[350px] md:h-[250px]"
							src="https://i.ibb.co/T4vWvYh/saxophonist11.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-[350px] h-[250px]"
							src="https://i.ibb.co/hgchjsy/gutarist.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-[350px] h-[250px]"
							src="https://i.ibb.co/09B0HGj/pianist.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-[350px] h-[250px]"
							src="https://i.ibb.co/SBSNhg1/trumpetist.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-[350px] h-[250px]"
							src="https://i.ibb.co/BtrQMrT/drumist.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="w-[350px] h-[250px]"
							src="https://i.ibb.co/4jjyws3/violinist.jpg"
							alt=""
						/>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Swiper;
