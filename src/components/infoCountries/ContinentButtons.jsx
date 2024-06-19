/* eslint-disable react/prop-types */

const ContinentButtons = ({ handleContinentChange }) => {
	const continents = [
		'Asia',
		'Europe',
		'Oceania',
		'Africa',
		'North America',
		'South America',
		'',
	];

	return (
		<div className='border-2 border-t-white'>
			<div className='flex flex-row flex-wrap items-center justify-around my-5 gap-4 '>
				{continents.map((continent, index) => (
					<button
						key={index}
						className='bg-red-600 rounded-xl p-3 text-white text-2xl font-semibold hover:bg-white hover:text-red-600 border border-red-600 shadow-xl'
						onClick={() => handleContinentChange(continent)}>
						{continent || 'Todos'}
					</button>
				))}
			</div>
		</div>
	);
};

export default ContinentButtons;
