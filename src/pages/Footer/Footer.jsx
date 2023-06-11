import React from 'react';

const Footer = () => {
	return (
		<div className="bg-[#0C4B65] text-white pb-5">
			<footer className="footer p-10  text-white">
				<div>
					<img
						className="w-20 h-20"
						src="https://i.ibb.co/KV42FCr/musicallogo.png"
						alt=""
					/>
					<p className="text-2xl text-[#C25934]  font-bold">
						Magical Music Studio
						<br />
						<span className="text-xl font-semibold text-[#EFCF4F]">
							Let Life Be Tuneful
						</span>
					</p>
				</div>
				<div>
					<span className="footer-title">Services</span>
					<a className="link link-hover">Guitar</a>
					<a className="link link-hover">Violin</a>
					<a className="link link-hover">Saxophone</a>
					<a className="link link-hover">Drums</a>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
				</div>
				<div>
					<span className="footer-title">address</span>
					<a className="link link-hover">Chandona Chowrasta, B/1</a>
					<a className="link link-hover">Gazipur City Corporation</a>
					<a className="link link-hover">Gazipur</a>
				</div>
			</footer>
			<p className="text-center pt-5">
				&copy; Magical Music Studio. All Rights Reserved
			</p>
		</div>
	);
};

export default Footer;
