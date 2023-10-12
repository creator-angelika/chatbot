import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
	return (
		<section className="bg-[url('/bck.png')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
			<div className="px-6  absolute inset-0 top-[132px] left-[700px] max-w-7xl mx-auto gap-6">
				{/*  message */}
				<div>
					<h1 className="text-white text-7xl font-extrabold">
						Hi, I'm <span className="text-theme">A.L.P.H.A</span>
					</h1>
					<p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
					Hello! 👋 I'm your friendly food-ordering and customer service chatbot.
						<br />
						Whether you're craving your favorite dish or need assistance with a recent order, I've got you covered!
					</p>
				</div>
			</div>

			<AvatarCanvas />
		</section>
	);
};

export default Hero;
