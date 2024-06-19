/* eslint-disable react/prop-types */

const PopulationSortButton = ({ handleSortByPopulation, sortByPopulation }) => {
  return (
    <div className='flex flex-row items-center justify-center pt-5 bg-red-700'>
      <p className='text-xl text-white font-semibold me-5 text-center '>
        Ordenar por Población{' '}
      </p>
      <button
        className='bg-white text-center rounded-xl p-3 text-red-600 text-2xl font-bold hover:bg-white hover:text-red-600 border border-red-600 shadow-xl'
        onClick={handleSortByPopulation}
      >
        {sortByPopulation ? '↓ Descendente' : '↑ Ascendente'}
      </button>
    </div>
  );
};

export default PopulationSortButton;
