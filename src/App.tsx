import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Employee from "./components/Employee/Employee";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="employee/:id" element={<Employee />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
