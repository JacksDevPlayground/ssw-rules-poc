import { cn } from "@lib/utils";
import { FacebookIcon, GithubIcon, HeartIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

type FooterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: React.ReactNode;
};

const FooterLink = ({ children, className, href, ...props }: FooterLinkProps) => {
	return (
		<a
			href={href}
			className={cn("leading-3 transition-all duration-[0.3s] ease-[ease-in-out] text-background hover:text-primary hover:underline", className)}
			{...props}
		>
			{children}
		</a>
	);
}

// TODO: Add a better LinkedIn, Facebook, and TikTok icon
// TODO: Replace the Tiktok's "GitHub" Icon with an actual TikTok icon
const SocialMediaList = [
	{
		icon: GithubIcon,
		title: "SSW on TikTok",
		href: "https://www.tiktok.com/@ssw_tv"
	},
	{
		icon: TwitterIcon,
		title: "SSW on Twitter",
		href: "https://twitter.com/SSW_TV"
	},
	{
		icon: InstagramIcon,
		title: "SSW on Instagram",
		href: "https://www.instagram.com/ssw_tv"
	},
	{
		icon: FacebookIcon,
		title: "SSW on Facebook",
		href: "https://www.facebook.com/SSW.page"
	},
	{
		icon: LinkedinIcon,
		title: "SSW on LinkedIn",
		href: "https://www.linkedin.com/company/ssw"
	},
	{
		icon: YoutubeIcon,
		title: "SSW on YouTube",
		href: "https://www.youtube.com/user/sswtechtalks"
	}
]

const SocialMediaIcon = ({ icon: Icon, title, href }: { icon: any, title: string, href: string }) =>
(
	<FooterLink title={title} href={href} target="_blank" rel="noreferrer">
		<Icon size="20" className="fill-background stroke-foreground" />
	</FooterLink>
)


const Footer = () => {
	const getLastDeployTime = () => new Date().getTime()

	return (
		<footer className="flex flex-col w-full">
			<section className="bg-gray-100 w-full py-2">
				<span className="flex flex-row justify-center items-center">
					We
					<HeartIcon className="fill-primary stroke-primary ml-1 mr-1" size="16" />
					open source. Powered by
					<a
						className="underline flex flex-row hover:text-primary transition-all duration-[0.3s] ease-[ease-in-out] items-center ml-2 group"
						href="https://github.com/SSWConsulting/SSW.Rules"
					>
						GitHub
						<GithubIcon size="16" className="fill-black group-hover:fill-primary group-hover:stroke-primary group-hover:transition-all group-hover:duration-[0.3s] group-hover:ease-[ease-in-out]  ml-1" />
					</a>
				</span>
			</section>
			<section className="bg-black w-full py-2">
				<div className="xl:mx-6">
					<div className="mx-6 flex flex-col-reverse md:flex-row justify-between align-middle leading-6">
						<div className="py-2 text-muted-foreground">
							Copyright © SSW 1990 - {new Date().getFullYear()}. All Rights
							Reserved.
						</div>
						<div className="w-full md:w-3/6 md:text-right py-2">
							<FooterLink href="https://github.com/SSWConsulting/SSW.Rules/issues" >FEEDBACK / SUGGEST A FEATURE</FooterLink>
							<span className="px-2 text-background">|</span>
							<FooterLink href="https://ssw.com.au/terms-and-conditions" >TERMS AND CONDITIONS</FooterLink>
							<span className="px-2 text-background">|</span>
							<div className="inline-flex flex-row-reverse justify-end flex-nowrap gap-4 align-middle items-center">
								{SocialMediaList.map((item, index) => <SocialMediaIcon key={index} {...item} />)}
							</div>
						</div>
					</div>
					<hr className="border-gray-800 my-2"></hr>
					<div className="flex flex-col md:flex-row justify-between mx-6">
						<div className="py-2 text-muted-foreground">
							Our website is under{' '}
							<FooterLink href="https://www.ssw.com.au/rules/rules-to-better-websites-deployment">
								CONSTANT CONTINUOUS DEPLOYMENT
							</FooterLink>
							. Last deployed {getLastDeployTime()} ago (Build #
							<FooterLink href="https://dev.azure.com/ssw/SSW.Rules/_release?_a=releases&view=mine&definitionId=3">
								{process.env.VERSION_DEPLOYED}
							</FooterLink>
							)
						</div>
						<div className="md:text-right py-2 text-muted-foreground">
							Powered by{' '}
							<FooterLink href="https://www.ssw.com.au/rules/rules-to-better-azure">
								Azure
							</FooterLink>{' '}
							and{' '}
							<FooterLink href="https://www.ssw.com.au/rules/static-site-generator">
								GitHub
							</FooterLink>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;


// <>
// 			<div className="bg-gray-100 text-sm  w-full">
// 				<section className="flex flex-row"><span>We <HeartIcon className="fill-primary stroke-primary" /> open source. Powered by</span>
// 					<a
// 						className="underline flex flex-row"
// 						href="https://github.com/SSWConsulting/SSW.Rules"
// 					>
// 						GitHub <GithubIcon />
// 					</a></section>
// 			</div>

// 			<div className="py-2 text-center bg-gray-100 text-sm">
// 				<section className="mx-auto flex flex-row items-center justify-center">
// 					We <HeartIcon className="fill-primary stroke-primary" /> open
// 					source. Powered by{' '}
// 					<a
// 						className="underline"
// 						href="https://github.com/SSWConsulting/SSW.Rules"
// 					>
// 						GitHub <GithubIcon />
// 					</a>
// 				</section>
// 			</div>
// 			<footer className="bg-black py-6 md:py-4 lg:py-2">
// 				<section className="main-container">
// 					<div className="xl:mx-6">
// 						<div className="mx-6 flex flex-col-reverse md:flex-row justify-between align-middle leading-6">
// 							<div className="py-2 ">
// 								Copyright © SSW 1990 - {new Date().getFullYear()}. All Rights
// 								Reserved.
// 							</div>
// 							<div className="w-full md:w-3/6 md:text-right py-2">
// 								<span className="px-2">|</span>
// 								<div className="inline-flex flex-row-reverse justify-end flex-nowrap">
// 									<a
// 										className=" social-media-icon"
// 										id="tiktok-icon"
// 										title="SSW on TikTok"
// 										href="https://www.tiktok.com/@ssw_tv"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										TIKTOK
// 										{/* <FontAwesomeIcon icon={faTiktok} size="lg" /> */}
// 									</a>
// 									<a
// 										className=" social-media-icon"
// 										id="twitter-icon"
// 										title="SSW on Twitter"
// 										href="https://twitter.com/SSW_TV"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										<TwitterIcon />
// 										{/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
// 									</a>
// 									<a
// 										className=" social-media-icon"
// 										id="instagram-icon"
// 										title="SSW on Instagram"
// 										href="https://www.instagram.com/ssw_tv"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										<InstagramIcon />
// 										{/* <FontAwesomeIcon icon={faInstagram} size="lg" /> */}
// 									</a>
// 									<a
// 										className=" social-media-icon"
// 										id="facebook-icon"
// 										title="SSW on Facebook"
// 										href="https://www.facebook.com/SSW.page"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										<FacebookIcon />
// 										{/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
// 									</a>
// 									<a
// 										className=" social-media-icon"
// 										id="linkedin-icon"
// 										title="SSW on LinkedIn"
// 										href="https://www.linkedin.com/company/ssw"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										<LinkedinIcon />
// 										{/* <FontAwesomeIcon icon={faLinkedin} size="lg" /> */}
// 									</a>
// 									<a
// 										className=" social-media-icon"
// 										id="youtube-icon"
// 										title="SSW on YouTube"
// 										href="https://www.youtube.com/user/sswtechtalks"
// 										target="_blank"
// 										rel="noreferrer"
// 									>
// 										<YoutubeIcon size="lg" />
// 										{/* <FontAwesomeIcon icon={faYoutube} size="lg" /> */}
// 									</a>
// 								</div>
// 							</div>
// 							{/* Copyright © SSW 1990 - {new Date().getFullYear()}. All Rights Reserved. */}
// 						</div>
// 						<hr className="border-gray-800 my-2"></hr>
// <div className="flex flex-col md:flex-row justify-between mx-6">
// 	<div className="py-2">
// 		Our website is under{' '}
// 		<a
// 			className="footer-link "
// 			href="https://www.ssw.com.au/rules/rules-to-better-websites-deployment"
// 		>
// 			CONSTANT CONTINUOUS DEPLOYMENT
// 		</a>
// 		. Last deployed {getLastDeployTime()} ago (Build #{' '}
// 		<a
// 			className="footer-link "
// 			href="https://dev.azure.com/ssw/SSW.Rules/_release?_a=releases&view=mine&definitionId=3"
// 		>
// 			{process.env.VERSION_DEPLOYED}
// 		</a>
// 		)
// 	</div>
// 	<div className="md:text-right py-2">
// 		Powered by{' '}
// 		<a
// 			className="footer-link "
// 			href="https://www.ssw.com.au/rules/rules-to-better-azure"
// 		>
// 			Azure
// 		</a>{' '}
// 		and{' '}
// 		<a
// 			className="footer-link "
// 			href="https://www.ssw.com.au/rules/static-site-generator"
// 		>
// 			{' '}
// 			GitHub
// 		</a>
// 	</div>
// </div>
// 					</div>
// 				</section>
// 			</footer>
// 		</>