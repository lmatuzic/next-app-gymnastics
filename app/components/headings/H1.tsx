import { HeadingProps } from '@/app/typings/headings';

export default function H1({ text }: HeadingProps) {
	return <div className='font-bold text-[32px] text-primaryVariantJudge'>{text}</div>;
}
