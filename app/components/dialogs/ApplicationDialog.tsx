import { Button } from '@/app/components/shadcn/Button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/app/components/shadcn/Dialog';
import { ReactNode } from 'react';

type ApplicationDialogProps = {
	children: ReactNode | JSX.Element;
};

export default function ApplicationDialog({ children }: ApplicationDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>New application</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-8'>Apply gymnast</DialogTitle>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	);
}
