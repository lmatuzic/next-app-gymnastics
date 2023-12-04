import { categories, programs } from '@/app/contants/programsAndCategories';

export const getProgramsAndCategories = () => {
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
