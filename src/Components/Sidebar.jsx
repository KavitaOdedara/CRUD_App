import '../App.css';

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" style={{ width: "250px", height: "100vh" }}>
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a> */}
      <div className='logo'>
        Emp
        <span>Data</span>
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <hr />
          <a href="#" className={`nav-link text-white link ${selectedTab === 'Employee' && 'active'}`} aria-current="page"
            onClick={() => { setSelectedTab('Employee') }}>
            Employee
          </a>
        </li>
      </ul>
      <hr />
    </div>
  </>
}
export default Sidebar