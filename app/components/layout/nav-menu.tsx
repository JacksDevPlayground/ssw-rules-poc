const NavMenu = () => {
	const navItems = [
		"Services",
		"Products",
		"Events",
		"SSW Rules",
		"SSW TV",
		"About Us",
		"Contact Us"
	]

	return (
		<nav className="flex justify-between items-center flex-[1_0_0]" >
			{navItems.map((item, index) => <NavItem key={index} title={item} />)}
		</nav>
	);
}

type NavItemProps = {
	title: string;
}
const NavItem = ({ title }: NavItemProps) => (<div className="flex w-[88px] h-6 justify-center items-center px-[2.5px] py-0">{title}</div>)

export default NavMenu;