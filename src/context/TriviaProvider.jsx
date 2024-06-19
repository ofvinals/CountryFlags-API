/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { TriviaContext } from './TriviaContext';
import { TriviaReducer } from '../reducer/TriviaReducer';

export const TriviaProvider = ({ children }) => {
	const initialState = {
		question: null,
		loading: true,
		error: null,
		score: 0,
		questionCount: 0,
		alert: null,
	};

	const [state, dispatch] = useReducer(TriviaReducer, initialState);

	const handleSuccess = () => {
		const action = {
			type: 'FETCH_SUCCESS',
		};
		dispatch(action);
	};

	const handleError = () => {
		const action = {
			type: 'FETCH_ERROR',
			payload: 'Error al conectar con los datos del país',
		};
		dispatch(action);
	};

	const handleQuestion = (newQuestion) => {
		const action = {
			type: 'GENERATE_QUESTION',
			payload: newQuestion,
		};
		dispatch(action);
	};

	const handleScore = (score) => {
		const action = {
			type: 'INCREMENT_SCORE',
			payload: score
		};
		dispatch(action);
	};

	const handleCountQuestion = () => {
		const action = {
			type: 'INCREMENT_QUESTION_COUNT',
		};
		dispatch(action);
	};

	const handleReset = () => {
		const action = {
			type: 'RESET_GAME',
		};
		dispatch(action);
	};

	const handleAlert = (alert) => {
		const action = {
			type: 'SET_ALERT',
			payload: alert
		};
		dispatch(action);
	};

	const handleAlertClear = () => {
		const action = {
			type: 'CLEAR_ALERT',
		};
		dispatch(action);
	};

	return (
		<TriviaContext.Provider
			value={{
				state,
				handleSuccess,
				handleError,
				handleQuestion,
				handleScore,
				handleCountQuestion,
				handleReset,
				handleAlert,
				handleAlertClear,
			}}>
			{children}
		</TriviaContext.Provider>
	);
};
