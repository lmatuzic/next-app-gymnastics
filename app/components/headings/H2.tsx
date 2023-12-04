import { HeadingProps } from '@/app/typings/headings';

export default function H2({ text, className = '' }: HeadingProps) {
	return <h2 className={`font-bold text-[22px] text-bgPrimaryDark ${className}`}>{text}</h2>;
}
