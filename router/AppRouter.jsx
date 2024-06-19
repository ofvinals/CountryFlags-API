import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { Home } from '../src/pages/Home';
import { CountryProvider } from '../src/context/CountryProvider';
import InfoCountries from '../src/pages/InfoCountries';
import { Trivia } from '../src/pages/Trivia';
import { TriviaProvider } from '../src/context/TriviaProvider';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<CountryProvider>
				<TriviaProvider>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route
							path='/infocountries'
							element={<InfoCountries />}></Route>
						<Route path='/trivia' element={<Trivia />}></Route>
					</Routes>
					<Footer />
				</TriviaProvider>
			</CountryProvider>
		</BrowserRouter>
	);
};
