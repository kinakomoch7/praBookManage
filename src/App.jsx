import { Route, Routes } from "react-router-dom";
import { Edit } from "./components/Pages/Edit/Edit";
import { Home } from "./components/Pages/Home/Home";
import { Search } from "./components/Pages/Search/Serch";
import SignIn from "./components/Pages/Sign/SignIn";
import { Header } from "./components/common/Header";
import { NotFound } from "./components/Pages/NotFound/NotFound";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/home" element={<Home />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
