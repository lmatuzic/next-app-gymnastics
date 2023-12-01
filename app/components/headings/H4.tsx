import { HeadingProps } from '@/app/typings/headings';

export default function H4({ text }: HeadingProps) {
	return <div className='text-base font-bold text-bgPrimaryDark'>{text}</div>;
}
