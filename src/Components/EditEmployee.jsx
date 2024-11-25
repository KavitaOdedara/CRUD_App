import '../App.css';
import { IoMdCloseCircle } from 'react-icons/io';

const EditEmployee = ({ isOpen, onClose, handelFormSubmit, formData, handelInputChange, handelSave }) => {
    if (!isOpen) return null;

    const handelSubmit = (e) => {
        e.preventDefault();
        handelFormSubmit(e); // Pass the event object here
    };
    return <>
        <div className="model-overlay">
            <div className="model-content">
                <button className="model-close" onClick={onClose}>
                <IoMdCloseCircle className='icon'></IoMdCloseCircle>
                </button>
                <h2>Edit Employee</h2>
                <form onSubmit={handelSubmit}>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="Name" value={formData.Name}
                        onChange={handelInputChange} required
                    />
                    <label>
                        Occupation:
                    </label>
                    <input type="text" name="Occupation" value={formData.Occupation}
                        onChange={handelInputChange} required
                    />
                    <label>
                        Salary:
                    </label>
                    <input type="number" name="Salary" value={formData.Salary}
                        onChange={handelInputChange} required
                    />
                    <button type="submit"
                    >Save</button>
                    {/* <button type="button" onClick={onClose}>Close</button> */}
                </form>
            </div>
        </div>
    </>
}
export default EditEmployee;