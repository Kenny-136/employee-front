import EmployeeList from "../../components/List/EmployeeList";

const Home = ({ employee }) => {
	console.log(employee);
	return (
		<div>
			<h1>Home</h1>
			<EmployeeList />
		</div>
	);
};

export default Home;
