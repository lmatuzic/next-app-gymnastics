type StatusIndicatorProps = {
	text: 'applied' | 'declined' | 'canceled' | 'awaiting response';
};

export default function StatusIndicator({ text }: StatusIndicatorProps) {
	const getCorrectBgColor = () => {
		if (text === 'applied') {
			return 'success';
		}

		if (text === 'declined') {
			return 'bgPrimaryDark';
		}

		if (text === 'canceled') {
			return 'bgSecondaryMedium';
		}

		if (text === 'awaiting response') {
			return 'warning';
		}
	};

	const bgColor = getCorrectBgColor();

	return (
		<div
			className={`px-2 text-white bg-${bgColor} w-fit rounded-sm text-[9px] uppercase font-bold`}
		>
			{text}
		</div>
	);
}
