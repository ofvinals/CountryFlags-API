/* eslint-disable react/prop-types */
const ProgressBar = ({ progressWidth, timer }) => {
	return (
		<div className='h-[40px] w-[500px] bg-white text-black relative my-5 border-2 border-text-red-600'>
			<div
				className='h-full bg-red-500'
				style={{ width: `${progressWidth}%` }}>
				<div className='absolute inset-0 flex items-center justify-center'>
					<span className='text-black font-semibold'>{`Tiempo restante: ${timer} segundos`}</span>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
