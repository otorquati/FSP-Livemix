import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Account'
import Playlist from './pages/Playlist'
import Favorites from './pages/Favorites'

function AppRoutes() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/perfil" element={<Perfil />}></Route>
			<Route path="/playlist" element={<Playlist />}></Route>
			<Route path="/favorites" element={<Favorites />}></Route>
		</Routes>
		</BrowserRouter>
	)
}
export default AppRoutes