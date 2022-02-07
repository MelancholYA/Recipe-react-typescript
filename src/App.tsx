import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//style
import './styles/main.css';

//Pages
import Home from './Pages/Home';
import MealPlanner from './Pages/MealPlanner';
import SearchResult from './Pages/SearchResult';
import { Header } from './components/Header';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='planner' element={<MealPlanner />} />
				<Route path='search/:query' element={<SearchResult />} />
			</Routes>
		</Router>
	);
}

export default App;
