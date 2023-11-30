'use client';

import { Route } from '@/app/contants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
	route: Route;
};

export default function NavLink({ route }: NavLinkProps) {
	const currentPath = usePathname();

	return (
		<Link
			href={route.path}
			className={
				route.path === currentPath ? 'text-zk-green' : 'hover:text-zk-green transition-colors'
			}
		>
			{route.name}
		</Link>
	);
}
