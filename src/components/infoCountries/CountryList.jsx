/* eslint-disable react/prop-types */
import { ItemCountry } from './ItemCountry';

const CountryList = ({ currentCountries }) => {
	return (
		<div className='flex flex-row flex-wrap gap-4 items-center justify-center bg-red-700'>
			{currentCountries.map((country) => (
				<ItemCountry key={country.cca3} country={country} />
			))}
		</div>
	);
};

export default CountryList;
