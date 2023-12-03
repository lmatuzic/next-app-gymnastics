import logo from '@/app/assets/logo/logo.svg';
import AccountDropdown from '@/app/components/dropdowns/AccountDropdown';
import H3 from '@/app/components/headings/H3';
import NavLink from '@/app/components/navigation/NavLink';
import { HOME_PAGE, routes } from '@/app/contants/routes';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

export default async function Navigation() {
	return (
		<nav className='w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.08)]'>
			<div className='container flex items-center justify-between py-4'>
				<div className='flex items-center'>
					<Link href={HOME_PAGE}>
						<Image src={logo} width={32} height={32} alt='Gymnastics app logo' className='mr-4' />
					</Link>

					<div className='items-center hidden sm:flex'>
						<H3 text='Competition name' />
						<span className='mx-1'>&#183;</span>
						<span className='font-light text-textSecondary'>Date</span>
					</div>
				</div>

				<div className='items-center hidden gap-4 md:flex'>
					<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
						{routes.map((route) => (
							<li key={route.path} className='mr-6'>
								<NavLink route={route} />
							</li>
						))}
					</ul>

					<AccountDropdown />
				</div>

				<MobileNavigation />
			</div>
		</nav>
	);
}
