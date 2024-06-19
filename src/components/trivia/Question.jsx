/* eslint-disable react/prop-types */
const Question = ({ questionCount, score }) => {
	return (
		<div className='flex flex-col items-start w-full justify-center mt-10 ps-10 text-xl'>
			<p className='text-white font-semibold'>
				Pregunta:
				<span className='px-3 font-bold'>{questionCount + 1} / 10</span>
			</p>
			<p className='text-white font-semibold'>
				Puntaje:
				<span className='px-3 font-bold'> {score}</span>
			</p>
		</div>
	);
};

export default Question;
