/* eslint-disable react/prop-types */
const ResetButton = ({ handleReset }) => {
   return (
     <button
       onClick={handleReset}
       className='bg-red-600 text-base rounded-xl p-2 font-semibold mt-5 text-white border border-red-600 shadow-xl hover:bg-white hover:text-red-600'>
       Reiniciar Juego
     </button>
   );
 };
 
 export default ResetButton;