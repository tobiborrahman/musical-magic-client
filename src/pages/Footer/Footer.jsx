import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const Footer = () => {
	return (
		<>
			<div className="bg-[#0C4B65] text-white pb-5 px-16">
				<footer className="footer py-10  text-white">
					<div>
						<span className="text-xl font-bold pb-4">
							Contact Us
						</span>
						<p className="flex justify-center items-center text-[17px] hover:text-[#C25934] duration-300">
							{' '}
							<span className="mr-2">
								<FiMapPin />
							</span>{' '}
							Barkat Sarani, Gazipur City <br /> Corporation,
							Gazipur
						</p>
						<p className="flex justify-center items-center text-[17px] hover:text-[#C25934] duration-300">
							<span className="mr-2">
								<MdOutlinePhoneInTalk />
							</span>
							+8801316433225
						</p>
						<p className="flex justify-center items-center text-[17px] hover:text-[#C25934] duration-300">
							{' '}
							<span className="mr-2">
								<MdOutlineMail />
							</span>{' '}
							r.tobibor16@gmail.com
						</p>
						<p className="flex justify-evenly items-center pt-3 gap-2">
							<FaFacebook className="text-xl border bg-white w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaFacebook>
							<FaInstagram className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaInstagram>
							<FaTwitter className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500"></FaTwitter>
							<FaLinkedin className="text-xl border bg-white  w-8 h-8 p-1 text-[#C25934] hover:text-white hover:bg-[#C25934] hover:border-none duration-500" />
						</p>
					</div>
					<div>
						<span className="text-xl font-bold pb-4">Support</span>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Privacy
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							FAQ's
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Support
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Terms
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Condition
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Policy
						</a>
					</div>
					<div>
						<span className="text-xl font-bold pb-4">
							Useful Links
						</span>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Guitar
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Saxophone
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Percussions
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Drums
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Flute
						</a>
						<a className="text-[17px] hover:text-[#C25934] hover:ml-2 duration-300">
							Violin
						</a>
					</div>
					<div>
						<span className="text-xl font-bold pb-4">
							Newsletter
						</span>
						<p className="text-[17px]">
							To get the latest news and latest updates from us.
						</p>
						<p className="text-[17px] py-2">Your Email Address</p>
						<input
							className="w-full py-3 pl-3 mb-2 text-white font-semibold rounded bg-transparent  border border-[#C25934]"
							placeholder="Enter Your Email "
							type="email"
						/>
						<button className="w-full py-3 pl-3 bg-[#C25934] font-semibold rounded">
							Subscribe
						</button>
					</div>
				</footer>
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
