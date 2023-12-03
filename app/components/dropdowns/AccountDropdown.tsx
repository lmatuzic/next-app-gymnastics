import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/shadcn/Avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/app/components/shadcn/DropdownMenu';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export default function AccountDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center gap-2'>
				<Avatar>
					<AvatarImage src='/avatar.png' alt='avatar' />
					<AvatarFallback>You</AvatarFallback>
				</Avatar>

				<span className='text-sm'>Nikola Kavezić</span>
				<ChevronDown className='w-4' />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
