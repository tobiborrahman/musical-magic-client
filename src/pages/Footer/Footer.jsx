import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className="bg-[#0C4B65]">
				<div className="custom-container">
					<div className="text-white pb-5 px-[15px]">
						<div className="flex flex-wrap justify-between py-10 text-white">
							<div>
								<div>
									<h4 className="text-xl font-bold pb-4">
										Contact Us
									</h4>
									<div className="flex items-center text-[17px] hover:text-[#C25934] duration-300">
										{' '}
										<div className="mr-2">
											<FiMapPin />
										</div>{' '}
										Barkat Sarani, Gazipur City <br />{' '}
										Corporation, Gazipur
									</div>
									<div className="flex  items-center text-[17px] hover:text-[#C25934] duration-300">
										<div className="mr-2">
											<MdOutlinePhoneInTalk />
										</div>
										+8801316433225
									</div>
									<div className="flex  items-center text-[17px] hover:text-[#C25934] duration-300">
										{' '}
										<span className="mr-2">
											<MdOutlineMail />
										</span>{' '}
										r.tobibor16@gmail.com
									</div>
									<div className="flex  items-center pt-3 gap-2">
										<FaFacebook className="text-xl border bg-white w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaFacebook>
										<FaInstagram className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaInstagram>
										<FaTwitter className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaTwitter>
										<FaLinkedin className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500" />
									</div>
								</div>
							</div>
							<div className="my-7 md:my-0">
								<div>
									<h4 className="text-xl font-bold pb-4">
										Support
									</h4>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Privacy
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										FAQ's
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Support
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Terms
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Condition
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Policy
									</h6>
								</div>
							</div>
							<div>
								<div>
									<h4 className="text-xl font-bold pb-4">
										Useful Links
									</h4>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Guitar
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Saxophone
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Percussions
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Drums
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Flute
									</h6>
									<h6 className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
										Violin
									</h6>
								</div>
							</div>
							<div className="mt-7 md:mt-0">
								<span className="text-xl font-bold pb-4">
									Newsletter
								</span>
								<p className="text-[17px] mt-4 mb-3">
									To get the latest news and latest updates
									from us.
								</p>

								<input
									className="w-full py-3 pl-3 mb-2 text-white font-semibold rounded bg-transparent  border border-[#C25934]"
									placeholder="Enter Your Email "
									type="email"
								/>
								<button className="w-full py-3 pl-3 bg-[#C25934] font-semibold rounded">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#234556] py-5">
				<div className="flex items-center justify-center">
					<div className="flex items-center">
						<img
							className="w-10 md:h-16 h-14  mt-1"
							src="https://i.ibb.co/KV42FCr/musicallogo.png"
							alt=""
						/>
						<h2 className="uppercase md:text-2xl text-xl text-[#EFCF4F] font-bold">
							Magical <br />
							<span className="text-[#C25934] mt-0 pt-0">
								Music{' '}
							</span>
						</h2>
					</div>
				</div>
				<p className="text-center font-semibold text-white">
					&copy; Magical Music Studio. All Rights Reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
