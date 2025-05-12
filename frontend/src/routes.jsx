import Home from './pages/Home'
import Login from './pages/Login'
import Account from './pages/Account'
import Playlist from './pages/Playlist'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Page404 from './pages/Page404'
import { BrowserRouter, Route, Routes } from 'react-router'

function AppRoutes() {

	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/account" element={<Account />}></Route>
			<Route path="/playlist" element={<Playlist />}></Route>
			<Route path="/favorites" element={<Favorites />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="*" element={<Page404 />}></Route>
		</Routes>
		</BrowserRouter>
	)
}
export default AppRoutes