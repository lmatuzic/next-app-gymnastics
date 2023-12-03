type StatusIndicatorProps = {
	text: 'applied' | 'declined' | 'canceled' | 'awaiting response';
};

export default function StatusIndicator({ text }: StatusIndicatorProps) {
	const colorClasses = {
		applied: 'bg-success',
		declined: 'bg-alert',
		canceled: 'bg-disabled',
		'awaiting response': 'bg-warning',
	};

	const bgColorClass = colorClasses[text] || 'bg-success';

	return (
		<div
			className={`px-2 text-white ${bgColorClass} w-fit rounded-sm text-[9px] uppercase font-bold`}
		>
			{text}
		</div>
	);
}
