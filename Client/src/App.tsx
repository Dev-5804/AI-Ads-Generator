import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyGenerations from './pages/MyGenerations';
import Loading from './pages/Loading';
import Results from './pages/Results';
import Generator from './pages/Generator';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Community from './pages/Community';
import Plans from './pages/Plans';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/generate" element={<Generator />} />
				<Route path="/results/:projectid" element={<Results />} />
				<Route path="/my-generations" element={<MyGenerations />} />
				<Route path="/community" element={<Community />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/loading" element={<Loading />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;