/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { CountryContext } from './CountryContext';
import { countryReducer } from '../reducer/CountryReducer';

export const CountryProvider = ({ children }) => {
	const initialState = {
		countries: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(countryReducer, initialState);

	const handleGet = (countries) => {
		const action = {
			type: 'GET_COUNTRIES',
			payload: countries,
		};
		dispatch(action);
	};

	return (
		<CountryContext.Provider
			value={{
				countries: state.countries,
				handleGet,
			}}>
			{children}
		</CountryContext.Provider>
	);
};
