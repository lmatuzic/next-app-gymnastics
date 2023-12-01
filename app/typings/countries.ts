export type Country = {
	cognitoID: string;
	code: string;
	name: string;
	phoneCode: string;
	flag: '🇦🇫';
};

export type CountryDropdownProps = {
	countries: Country[];
};
