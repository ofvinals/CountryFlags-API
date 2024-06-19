/* eslint-disable react-hooks/exhaustive-deps */
import ProgressBar from '../components/trivia/ProgressBar';
import ResetButton from '../components/trivia/ResetButton';
import Question from '../components/trivia/Question';
import { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TriviaContext } from '../context/TriviaContext';
import { generateQuestion } from '../components/trivia/GenerateQuestion';

export const Trivia = () => {
	const { countries, handleGet, loading } = useContext(CountryContext);
	const baseImageUrl = 'https://restcountries.com/v3.1/all';
	const [timer, setTimer] = useState(15);
	const [timeInterval, setTimeInterval] = useState(null);
	const {
		state,
		handleSuccess,
		handleError,
		handleQuestion,
		handleScore,
		handleCountQuestion,
		handleReset,
		handleAlert,
		handleAlertClear,
	} = useContext(TriviaContext);

	// Paticion de datos por axios. Guardo los datos con useReducer
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(baseImageUrl);
				handleGet(res.data);
				handleSuccess();
			} catch (error) {
				handleError();
			}
		};
		fetchData();
	}, []);

	// Maneja el contador de preguntas. Genera una nueva pregunta, si el contador no llego hasta 10 por turno
	useEffect(() => {
		let interval;
		if (state.questionCount < 10 && !loading && countries.length > 0) {
			const newQuestion = generateQuestion(countries);
			handleQuestion(newQuestion);
			setTimer(15);
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
			setTimeInterval(interval);
		}
		return () => clearInterval(interval);
	}, [state.questionCount, loading, countries]);

	useEffect(() => {
		if (timer === 0) {
			clearInterval(timeInterval);
			handleAlert({
				title: 'Tiempo agotado',
				text: 'Se acabó el tiempo para responder la pregunta.',
				icon: 'warning',
			});
			handleCountQuestion();
		}
	}, [timer]);

	// Maneja el estado de sweet alert de acuerdo a la respuesta dada
	useEffect(() => {
		if (state.alert) {
			Swal.fire({
				title: state.alert.title,
				html: state.alert.html || state.alert.text,
				icon: state.alert.icon,
				timer: 3000,
				showConfirmButton: false,
			}).then(() => {
				handleAlertClear();
			});
		}
	}, [state.alert]);

	// Maneja los mensajes de alerta con TriviaContext y TriviaReducer
	const handleAnswerClick = (option) => {
		clearInterval(timeInterval);
		let score = state.score;
		if (
			option.translations.spa.common ===
			state.question.correctCountry.translations.spa.common
		) {
			console.log(timer);
			score += timer;
			handleScore(score);
			handleAlert({ title: '¡Correcto!', text: '', icon: 'success' });
		} else {
			handleAlert({
				title: 'Incorrecto',
				html: `<p>La respuesta correcta era <span class='text-green-800 font-bold'>${state.question.correctCountry.translations.spa.common}</span></p>`,
				icon: 'error',
			});
		}
		if (state.questionCount + 1 < 10) {
			handleCountQuestion();
		} else {
			handleAlert({
				title: 'Juego terminado',
				text: `Tu puntaje es de ${state.score}`,
				icon: 'success',
			});
			handleReset();
		}
	};

	if (state.loading) {
		return <div>Cargando...</div>;
	}

	if (state.error) {
		return <div>{state.error}</div>;
	}

	const progressWidth = (timer / 15) * 100;
	return (
		<div className='flex flex-col items-center h-full pb-10 bgimage'>
			<h1 className='my-10 text-4xl font-bold text-white '>
				Quizz de Banderas
			</h1>
			<hr className='bg-white w-full p-[0.5px]' />
			<Question questionCount={state.questionCount} score={state.score} />
			<ProgressBar progressWidth={progressWidth} timer={timer} />
			<ResetButton handleReset={handleReset} />
			<h2 className='text-white text-2xl font-semibold text-center my-8'>
				A que pais corresponde esta bandera?
			</h2>
			{state.question && (
				<>
					<div className='flex flex-col items-center justify-around w-full'>
						<img
							src={state.question.correctCountry.flags.png}
							alt='Flag'
							className='w-1/2 shadow-2xl rounded-lg'
						/>
						<div className='flex flex-row flex-wrap gap-7 my-10 items-center justify-center'>
							{state.question.options.map((option) => (
								<button
									key={option.translations.spa.common}
									onClick={() => handleAnswerClick(option)}
									className='bg-red-600 rounded-xl p-3 text-white text-2xl font-semibold hover:bg-white hover:text-red-600 border border-red-600 shadow-xl'>
									{option.translations.spa.common}
								</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Trivia;
