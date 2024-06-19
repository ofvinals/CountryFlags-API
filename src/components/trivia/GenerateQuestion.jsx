// Función para generar una pregunta, recibiendo el valor de countries
export const generateQuestion = (countries) => {
	const correctCountry =
		countries[Math.floor(Math.random() * countries.length)];
	let options = [correctCountry];

	// Ejecuta bucle con 4 elementos
	while (options.length < 4) {
		const randomCountry =
			// Elije un pais aleatorio
			countries[Math.floor(Math.random() * countries.length)];
		// Verifica que no sean duplicados
		if (
			!options.some(
				(country) =>
					country.translations.spa.common ===
					randomCountry.translations.spa.common
			)
		) {
			// Agrega al array
			options.push(randomCountry);
		}
	}
	// Mezclar las opciones
	options = options.sort(() => Math.random() - 0.5);
	return { correctCountry, options };
};
