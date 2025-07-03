import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import { motion } from "framer-motion";

interface Employee {
  id: number;
  name: string;
  position: string;
  active: boolean;
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get("employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
      });
  }, []);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-teal-400 mb-6">
        Employee List
      </h1>
      <div className="mb-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search by name or position"
          className="w-full p-3 rounded-md border-2 border-teal-400 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.ul className="space-y-6">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <motion.li
              key={employee.id}
              className="p-6 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-teal-400">
                {employee.name}
              </h2>
              <p className="text-gray-400">{employee.position}</p>
              <p className="text-sm text-gray-500">
                Status: {employee.active ? "Active" : "Inactive"}
              </p>
              <Link
                to={`/employee/${employee.id}`}
                className="text-teal-400 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </motion.li>
          ))
        ) : (
          <li className="text-center text-gray-500">No employees found.</li>
        )}
      </motion.ul>
    </div>
  );
};

export default EmployeeList;
