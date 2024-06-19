/* eslint-disable react/prop-types */

export const ItemCountry = ({ country }) => {
	const languages = country.languages
		? Object.values(country.languages).join(', ')
		: '';

	return (
		<div className='flex flex-col w-[260px] h-[320px] bg-white border-green-900 border-2 my-5 shadow-2xl rounded-lg'>
			<div className=' flex items-center justify-around min-h-[115px]'>
				<h3 className='ms-5 w-1/2 font-semibold text-xl text-center'>
					<span>{country.translations.spa.common}</span>
				</h3>
				<img className='w-[80px]' src={country.flags.png} alt='' />
			</div>
			<div className='w-full flex flex-col border items-center justify-center border-t-black pt-2'>
				<p className='w-full ps-3 font-semibold'>
					Continente:{' '}
					<span className=' font-normal'>{country.continents}</span>
				</p>
				<p className='w-full ps-3 font-semibold'>
					Capital: <span className=' font-normal'>{country.capital}</span>
				</p>
				<p className='w-full ps-3 font-semibold'>
					Independiente:{' '}
					<span className=' font-normal'>
						{country.independent ? 'Sí' : 'No'}
					</span>
				</p>
				{languages && (
					<p className='w-full ps-3 font-semibold'>
						Idioma: <span className='font-normal'>{languages}</span>
					</p>
				)}
				<p className='w-full ps-3 font-semibold'>
					Poblacion:{' '}
					<span className=' font-normal'>
						{' '}
						{country.population.toLocaleString()}
					</span>{' '}
					<span className=' font-normal'>Habs</span>
				</p>
				<p className='w-full ps-3 font-semibold'>
					Ubicacion:{' '}
					<a href={country.maps.googleMaps} target='_blank'>
						<span className=' font-normal underline'>Ver Mapa</span>
					</a>
				</p>
			</div>
		</div>
	);
};
