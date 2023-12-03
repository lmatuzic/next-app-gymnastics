import { HeadingProps } from '@/app/typings/headings';

export default function H1({ text, className = '' }: HeadingProps) {
	return <div className={`font-bold text-[32px] text-bgPrimaryDark ${className}`}>{text}</div>;
}
