import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFoundPage";
import Employee from "./pages/Employee/EmployeePage";
import { useEffect, useState } from "react";
import { getAllEmployee } from "./services/employee-service";
function App() {
	const [employee, setEmployee] = useState([]);
	useEffect(() => {
		getAllEmployee().then((data) => {
			setEmployee(data);
		});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home employee={employee} />} />
					<Route path="*" element={<NotFound />} />
					<Route path="employee/:id" element={<Employee />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
