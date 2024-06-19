import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='bg-red-900 flex flex-col md:flex-row justify-around items-center'>
			<Link
				to='/'
				className='md:text-start text-center p-6 text-white text-4xl font-bold w-fit '>
				Countries Trivia
			</Link>
			<div className='flex flex-row flex-wrap mb-3 gap-4 justify-between items-center text-white font-semibold '>
				<Link
					className='hover:text-blue-400 hover:underline'
					to={'/infocountries'}>
					Informacion
				</Link>
				<Link
					className='hover:text-blue-400 hover:underline'
					to={'/trivia'}>
					Trivia
				</Link>
			</div>
			;
		</div>
	);
};
