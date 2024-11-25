import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import DataTable from './Components/DataTable';
import Pagination from './Components/Paginatio';
import Message from './Components/Message';
import EmployeeData from '../public/assets/Employee';
import EmpDetails from './Components/EmpDetails';
import EditEmployee from './Components/EditEmployee';



function App() {
  const [selectedTab, setSelectedTab] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [employeePerPage] = useState(5);
  const [employees, setEmployees] = useState(EmployeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const indexOfLastEmployee = currentPage * employeePerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [formData, setFormData] = useState({Id: '', Name: '', Occupation: '', Salary: ''});
 

  // pagination logic

  const totalPages = Math.ceil(EmployeeData.length / employeePerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  
  // display

  const handelPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  const handelViewEmployee = (employee) => {
    setSelectedEmployee(employee);
  }

  const handelCloseModel = () => {
    setSelectedEmployee(null);
  }

// Delete 

  const handelDelete = (employeeId) => {
    setEmployees(employees.filter(employee => employee.Id !== employeeId));
   
  };

  // edit Employee code

  const handelEditClick = (employee) => {
      setIsModelOpen(true);
      setFormData(employee);
  };

  const handelInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value}); 
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    if(!formData.Id){
      console.error("Form data does not contain an Id.");
      return;
    }
    const updateEmployees = employees.map((emp) => emp.Id === formData.Id ? formData : emp);
    setEmployees(updateEmployees);
    setIsModelOpen(false);
  }


  return (
    <>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          {selectedTab === 'Employee' ?
            (<DataTable
              currentEmployees={currentEmployees}
              handelViewEmployee={handelViewEmployee}
              handelDelete={handelDelete}
              handelEditClick={handelEditClick}
            ></DataTable>)
            :
            <Message></Message>
          }         
         { selectedTab === 'Employee' ?
         (<Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handelPageChange={handelPageChange}
            pageNumbers={pageNumbers}
            employees={employees}
          ></Pagination>) : null
         }
        </div>
      </div>
      <EmpDetails handelCloseModel={handelCloseModel} selectedEmployee={selectedEmployee}></EmpDetails>
          <EditEmployee
          isOpen={isModelOpen}
          onClose={() => setIsModelOpen(false)}
          handelFormSubmit={handelFormSubmit}
          formData={formData}
          handelInputChange={handelInputChange}
          ></EditEmployee> 
    </>
  )
}

export default App;
