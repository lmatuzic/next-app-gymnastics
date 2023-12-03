'use client';

import AccountDropdown from '@/app/components/dropdowns/AccountDropdown';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/shadcn/Sheet';
import { HOME_PAGE, routes } from '@/app/contants/routes';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNavigation() {
	const [isOpened, setIsOpened] = useState(false);

	const handleOpenMobileNav = () => {
		setIsOpened(true);
	};

	const handleCloseMobileNav = () => {
		setIsOpened(false);
	};

	return (
		<Sheet open={isOpened} onOpenChange={setIsOpened}>
			<SheetTrigger onClick={handleOpenMobileNav} className='md:hidden'>
				<Menu />
			</SheetTrigger>

			<SheetContent className='flex flex-col items-end pt-20'>
				<AccountDropdown />
				<Separator className='w-full h-[1px] bg-bgSecondaryMedium' />

				<ul className='flex flex-col items-end'>
					<li className='mb-4'>
						<Link href={HOME_PAGE} onClick={handleCloseMobileNav} className='text-xl'>
							Home
						</Link>
					</li>

					{routes.map((route) => (
						<li key={route.path} className='mb-4'>
							<Link href={route.path} onClick={handleCloseMobileNav} className='text-xl'>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
}
