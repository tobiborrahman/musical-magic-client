import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SectionTitle from '../../../components/SectionTitle';

const Swiper = () => {
	return (
		<div className="pb-20">
			<SectionTitle
				subHeading="Gallery"
				heading="Popular Collection"
			></SectionTitle>
			<div className="custom-container">
				<Fade duration={3000}>
					<div className="grid md:grid-cols-3 mx-3 gap-3">
						<div>
							<img
								src="https://i.ibb.co/T4vWvYh/saxophonist11.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://i.ibb.co/hgchjsy/gutarist.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://i.ibb.co/09B0HGj/pianist.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://i.ibb.co/SBSNhg1/trumpetist.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://i.ibb.co/BtrQMrT/drumist.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								src="https://i.ibb.co/4jjyws3/violinist.jpg"
								alt=""
							/>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Swiper;
