import '../App.css';
import { IoMdCloseCircle } from 'react-icons/io';

const EmpDetails = ({ selectedEmployee, handelCloseModel }) => {

  return <>
    {selectedEmployee && (
      <div className="model-overlay" >
        <div className="model-Content">
          <h2>{selectedEmployee.Name}</h2>
          <p>Occupation : {selectedEmployee.Occupation}</p>
          <p>Salary : {selectedEmployee.Salary}</p>
          <button className='actionbtn' onClick={handelCloseModel}>
            <IoMdCloseCircle className='icon'></IoMdCloseCircle>
          </button>
        </div>
      </div>
    )}
  </>

}
export default EmpDetails;
