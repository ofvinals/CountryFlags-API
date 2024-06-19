/* eslint-disable react/prop-types */

const Pagination = ({ totalPages, paginate, currentPage }) => {
	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxPagesToShow = 7;
		const sidePages = 2; // Número de botones alrededor de la página actual

		if (totalPages <= maxPagesToShow) {
			// Mostrar todos los botones si el número total de páginas es menor o igual al máximo a mostrar
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			const startPages = [1];
			const endPages = [totalPages];
			const middlePages = [];

			let start = Math.max(2, currentPage - sidePages);
			let end = Math.min(totalPages - 1, currentPage + sidePages);

			if (currentPage <= sidePages + 2) {
				start = 2;
				end = Math.min(totalPages - 1, maxPagesToShow - 2);
			} else if (currentPage >= totalPages - sidePages - 1) {
				start = totalPages - (maxPagesToShow - 3);
				end = totalPages - 1;
			}

			for (let i = start; i <= end; i++) {
				middlePages.push(i);
			}

			if (start > 2) {
				pageNumbers.push(...startPages, '...', ...middlePages);
			} else {
				pageNumbers.push(...startPages, ...middlePages);
			}

			if (end < totalPages - 1) {
				pageNumbers.push('...', ...endPages);
			} else {
				pageNumbers.push(...endPages);
			}
		}

		return pageNumbers.map((number, index) =>
			number === '...' ? (
				<span key={index} className='text-white w-[10px]'>
					{number}
				</span>
			) : (
				<button
					key={index}
					onClick={() => paginate(number)}
					className={`bg-red-700 text-white font-semibold mx-4 my-2 py-2 px-4 border border-red-700 ${
						currentPage === number ? 'bg-red-200 text-red-900' : ''
					}`}>
					{number}
				</button>
			)
		);
	};

	return (
		<div className='flex items-center justify-around flex-wrap gap-2 my-5'>
			{renderPageNumbers()}
		</div>
	);
};

export default Pagination;
