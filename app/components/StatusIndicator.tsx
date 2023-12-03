type StatusIndicatorProps = {
	text: 'applied' | 'declined' | 'canceled' | 'awaiting response';
};

export default function StatusIndicator({ text }: StatusIndicatorProps) {
	let bgColor;

	switch (text) {
		case 'applied':
			bgColor = 'success';
			break;
		case 'declined':
			bgColor = 'alert';
			break;
		case 'canceled':
			bgColor = 'disabled';
			break;
		case 'awaiting response':
			bgColor = 'warning';
			break;
		default:
			bgColor = ''; // Default class if text doesn't match any case
	}

	return (
		<div
			className={`px-2 text-white bg-${bgColor} w-fit rounded-sm text-[9px] uppercase font-bold`}
		>
			{text}
		</div>
	);
}
