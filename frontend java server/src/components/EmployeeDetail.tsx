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

interface EmployeeWithReports {
  employee: Employee;
  directReportNames: string[];
}

const EmployeeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [employeeWithReports, setEmployeeWithReports] =
    useState<EmployeeWithReports | null>(null);

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`/employees/${id}/with-direct-reports`)
        .then((response) => {
          setEmployeeWithReports(response.data);
        })
        .catch((error) => {
          console.error("Error fetching employee details:", error);
        });
    }
  }, [id]);

  if (!employeeWithReports) return <div>Loading...</div>;

  const { employee, directReportNames } = employeeWithReports;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Employee Details
        </h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
            {employee.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Position: {employee.position}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Status: {employee.active ? "Active" : "Inactive"}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hire Date: {employee.hireDate}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Direct Reports:{" "}
            {directReportNames.length > 0
              ? directReportNames.join(", ")
              : "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
