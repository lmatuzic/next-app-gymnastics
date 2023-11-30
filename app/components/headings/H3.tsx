import { HeadingProps } from '@/app/typings/headings';

export default function H3({ text }: HeadingProps) {
	return <h3 className='font-bold text-lg'>{text}</h3>;
}
