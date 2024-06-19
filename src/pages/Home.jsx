import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className='bgimage h-[500px]'>
			<h1 className='text-white text-4xl font-bold text-center py-20'>
				COUNTRY TRIVIA
			</h1>
			<div className='flex flex-row flex-wrap items-center justify-around py-20 gap-4'>
				<Link
					to={'/infocountries'}
					className='text-center bg-white p-4 rounded-xl text-red-600 font-semibold text-xl border-2 border-red-600 hover:bg-red-600 hover:text-white shadow-2xl'>
					Informacion de Paises
				</Link>
				<Link
					to={'/trivia'}
					className='text-center bg-white p-4 rounded-xl text-red-600 font-semibold text-xl border-2 border-red-600 hover:bg-red-600 hover:text-white shadow-2xl'>
					Trivia Banderas
				</Link>
			</div>
		</div>
	);
};
