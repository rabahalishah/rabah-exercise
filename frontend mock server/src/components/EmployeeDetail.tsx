import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";

interface Employee {
  id: number;
  name: string;
  position: string;
  active: boolean;
  hireDate: string;
  directReports: number[];
}

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`employees/${id}`)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error("Error fetching employee details:", error);
        });
    }
  }, [id]);

  if (!employee) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-teal-400 mb-6">
          Employee Details
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-400">
            {employee.name}
          </h2>
          <p className="text-lg text-gray-400">Position: {employee.position}</p>
          <p className="text-lg text-gray-400">
            Status: {employee.active ? "Active" : "Inactive"}
          </p>
          <p className="text-lg text-gray-400">
            Hire Date: {employee.hireDate}
          </p>
          <p className="text-lg text-gray-400">
            Direct Reports:{" "}
            {employee.directReports.length > 0
              ? employee.directReports.join(", ")
              : "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
