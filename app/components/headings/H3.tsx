import { HeadingProps } from '@/app/typings/headings';

export default function H3({ text }: HeadingProps) {
	return <h3 className='text-lg font-bold text-bgPrimaryDark'>{text}</h3>;
}
