export type Route = {
	path: string;
	name: string;
};

export const HOME_PAGE = '/';
export const APPLICATIONS_PAGE = '/applications';

export const routes: Route[] = [
	{
		path: APPLICATIONS_PAGE,
		name: 'Applications',
	},
];
