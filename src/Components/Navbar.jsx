import '../App.css';

const Navbar = () =>{
    return <>
     <header className="p-3 bg-dark text-white">
    <div className="container">
     {/* <div className='text'>
        Welcome to This page!
      </div> */}

      <nav className='nav'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blogs</a></li>

      </nav>
    </div>
  </header>
    </>
}

export default Navbar;