/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import Search from '../components/infoCountries/Search';
import ContinentButtons from '../components/infoCountries/ContinentButtons';
import PopulationSortButton from '../components/infoCountries/PopulationSortButton';
import CountryList from '../components/infoCountries/CountryList';
import Pagination from '../components/infoCountries/Pagination';

const InfoCountries = () => {
	const baseImageUrl = 'https://restcountries.com/v3.1/all';
	const { countries, handleGet } = useContext(CountryContext);
	const [search, setSearch] = useState('');
	const [selectedContinent, setSelectedContinent] = useState('');
	const [sortByPopulation, setSortByPopulation] = useState(false);
	const CountryPerPage = 20;
	const [currentPage, setCurrentPage] = useState(1);

	// Función para cambiar el estado de filtro de continente
	const handleContinentChange = (continent) => {
		setSelectedContinent(continent);
	};

	// Función para ordenar países por población
	const handleSortByPopulation = () => {
		setSortByPopulation(!sortByPopulation);
	};

	// Filtrar y ordenar países según el estado actual
	let filteredCountries = countries;

	if (selectedContinent) {
		filteredCountries = filteredCountries.filter((country) =>
			country.continents.includes(selectedContinent)
		);
	}

	if (sortByPopulation) {
		filteredCountries.sort((a, b) => a.population - b.population);
	} else {
		filteredCountries.sort((a, b) => b.population - a.population);
	}

	// Filtrar por búsqueda
	const filteredCountry = search
		? filteredCountries.filter((country) =>
				country.name.common.toLowerCase().includes(search.toLowerCase())
		  )
		: filteredCountries;

	// Paginación
	const indexOfLastContact = currentPage * CountryPerPage;
	const indexOfFirstContact = indexOfLastContact - CountryPerPage;
	const currentCountries = filteredCountry.slice(
		indexOfFirstContact,
		indexOfLastContact
	);
	const totalPages = Math.ceil(filteredCountry.length / CountryPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// Peticion API
	useEffect(() => {
		const Data = async () => {
			try {
				const res = await axios.get(baseImageUrl);
				handleGet(res.data);
			} catch (error) {
				console.error('Error al conectar con los datos del país:', error);
			}
		};
		Data();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='bgimage'>
				<h1 className='text-center text-white text-4xl font-bold mb-10 pt-10'>
					Informacion de Paises
				</h1>
				<div className='flex items-center justify-center'>
					<Search setSearch={setSearch} />
				</div>
				{/* Filtro por continente */}
				<ContinentButtons handleContinentChange={handleContinentChange} />
			</div>
			{/* Orden por población */}
			<PopulationSortButton
				handleSortByPopulation={handleSortByPopulation}
				sortByPopulation={sortByPopulation}
			/>

			{/* lista de países */}
			<CountryList currentCountries={currentCountries} />
			<div className='flex flex-row items-center justify-center '>
				{/* Paginación */}
				<Pagination
					totalPages={totalPages}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		</>
	);
};

export default InfoCountries;
