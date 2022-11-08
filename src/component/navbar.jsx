


// import component button get started
import ButtonGetStarted from './buttonStarted.jsx';

// functional component navbar


const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top nav-top">
             <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="Assets/logo.svg" className="logo-navbar" alt="Logo Navbar"  />
                </a>
                <button className="btn-signin ms-auto">
                    <img src="Assets/Search Icon.svg" alt="" />
                    <span className="text-signin">Sign In</span>
                </button>
                {/* button get started */}
                <ButtonGetStarted idButton="btn-started-navbar"/>
             </div>
        </nav>
    );
};


export default Navbar;