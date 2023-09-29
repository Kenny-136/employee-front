export const getAllEmployee = async () => {
	const response = await fetch("http://localhost:8080/employees");
	const employees = await response.json();
	return employees;
};
