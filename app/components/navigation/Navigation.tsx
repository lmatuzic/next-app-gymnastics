import logo from '@/app/assets/logo/logo.svg';
import H3 from '@/app/components/headings/H3';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/shadcn/Avatar';
import { HOME_PAGE } from '@/app/contants/routes';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

export default async function Navigation() {
	return (
		<nav className='w-full'>
			<div className='container flex items-center justify-between py-4'>
				<div className='flex items-center'>
					<Link href={HOME_PAGE}>
						<Image src={logo} width={32} height={32} alt='Gymnastics app logo' className='mr-4' />
					</Link>

					<div className='items-center hidden sm:flex'>
						<H3 text='Competition name' />
						<span className='mx-1'>&#183;</span>
						<span className=''>Date</span>
					</div>
				</div>

				<div className='flex items-center gap-4'>
					<Avatar>
						<AvatarImage src='/avatar.png' alt='avatar' />
						<AvatarFallback>You</AvatarFallback>
					</Avatar>

					<span>Nikola Kavezić</span>
				</div>

				{/* <ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					{routes.map((route) => (
						<li key={route.path} className='hidden mr-6 sm:flex'>
							<NavLink route={route} />
						</li>
					))}
				</ul> */}

				<MobileNavigation />
			</div>
		</nav>
	);
}
