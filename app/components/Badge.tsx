interface BadgeProps {
	className?: string;
	color: 'yellow' | 'green' | 'red' | 'gray';
	content?: React.ReactNode;
}

export default function Badge({ color = 'green', className = '', content = <></> }: BadgeProps) {
	// define a mapping between prop values and Tailwind classes
	// in Tailwing class names are generated at build time, and it doesn't directly support dynamic class names based on props
	const colorClasses = {
		yellow: 'bg-warning',
		green: 'bg-success',
		red: 'bg-primaryDark',
		gray: 'bg-secondary',
	};

	// get the corresponding class for the provided color prop
	const bgColorClass = colorClasses[color] || 'bg-green';

	return (
		<span
			className={`flex items-center justify-center w-2.5 h-2.5 text-center text-xs font-aeonik rounded-full text-white ${bgColorClass} ${className}`}
		>
			{content}
		</span>
	);
}
