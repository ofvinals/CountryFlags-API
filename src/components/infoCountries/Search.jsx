/* eslint-disable react/prop-types */
const Search = ({ search, setSearch }) => {
	return (
		<div className='w-1/2 mb-4'>
			<input
				type='text'
				placeholder='Buscar por nombre de pais...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full p-2 border-3 border-red-700 rounded-xl'
			/>
		</div>
	);
};

export default Search;
