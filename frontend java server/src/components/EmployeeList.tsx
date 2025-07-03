import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";

interface Employee {
  id: number;
  name: string;
  position: string;
  active: boolean;
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch active employees from the API
  useEffect(() => {
    axiosInstance
      .get("/employees/active")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the active employees!",
          error
        );
      });
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
        Active Employee List
      </h1>
      <div className="mb-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search by name or position"
          className="w-full p-3 rounded-md border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="space-y-6">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li
              key={employee.id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                {employee.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {employee.position}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Status: {employee.active ? "Active" : "Inactive"}
              </p>
              <Link
                to={`/employee/${employee.id}`}
                className="text-blue-500 dark:text-blue-400 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500 dark:text-gray-400">
            No employees found.
          </li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeList;
