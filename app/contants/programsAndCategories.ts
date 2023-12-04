import { getProgramsAndCategories } from '@/app/utils/getProgramsAndCategories';

export const programs = [{ name: 'Univerzalni program' }, { name: 'Obavezni program' }];

export const categories = [
	{ name: 'Mlađe djevojčice' },
	{ name: 'Starije djevojčice' },
	{ name: 'Mlađi dječaci' },
	{ name: 'Stariji dječaci' },
];

export const programsAndCategories = getProgramsAndCategories();
