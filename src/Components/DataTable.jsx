
import '../App.css';
import { MdDelete, MdViewList } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';



const DataTable = ({ currentEmployees, handelViewEmployee, handelDelete, handelEditClick }) => {

  return <>
    <table className="table setTable">
      <thead>
        <tr>
          <th scope="col">Sr No</th>
          <th scope="col">Name</th>
          <th scope="col">occupation</th>
          <th scope="col">Salary</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentEmployees.map((employee) => (
          <tr key={employee.Id}>
            <td>{employee.Id}</td>
            <td>{employee.Name}</td>
            <td>{employee.Occupation}</td>
            <td>{employee.Salary}</td>
            <td>
              <button className='actionbtn'
                onClick={() => handelViewEmployee(employee)}
              >
                <MdViewList className='icon'></MdViewList>
              </button>
              <button className='actionbtn'
              onClick={() => handelEditClick(employee)}
              >
                <GrEdit className='icon'></GrEdit>
              </button>
              <button className='actionbtn'
              onClick={() =>{ 
                handelDelete(employee.Id)
                console.log(employee.Id)}
              }>
                <MdDelete className='icon'></MdDelete>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </>
}

export default DataTable;

