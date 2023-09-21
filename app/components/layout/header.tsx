import NavMenu from "./nav-menu";
import Image from "next/image";

const Header = () => {
	return (
		<div className="flex justify-between items-center md:max-w-4xl lg:max-w-screen-lg xl:max-w-screen-xl  2xl:max-w-screen-2xl mx-auto py-4 ">
			<div className="flex items-center gap-2 px-0 py-1">
				<div className="w-[110px] h-[57.899px]"><Image src="/images/rules-logo.svg" alt="SSW Logo" width={0} height={0} sizes="100vw" className="w-full h-auto" /></div>
				<div className="w-[105px] self-stretch text-black text-[40px] not-italic font-normal leading-[normal]">Rules</div>
			</div>
			<NavMenu />
		</div>
	);
}

export default Header;