import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className='bg-red-900 flex flex-col md:flex-row justify-center items-center flex-wrap '>
			<Link
				to='/'
				className=' text-center p-6 text-white text-4xl font-bold w-fit '>
				Countries Trivia
			</Link>
			<p className='text-white '>
				Desarrollo:
				<a
					className='hover:text-blue-400 font-semibold'
					href='https://ofvdev.netlify.app/'
					target='_blank'>
					{' '}
					OFVDev
				</a>
			</p>
		</div>
	);
};
