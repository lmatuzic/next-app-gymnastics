import { categories, programs } from '@/app/contants/applications';

export const getCombinedProgramsAndCategories = () => {
	const combinedArray = [];

	for (const program of programs) {
		for (const category of categories) {
			const combinedItem = {
				name: `${program.name} - ${category.name}`,
			};

			combinedArray.push(combinedItem);
		}
	}

	return combinedArray;
};
