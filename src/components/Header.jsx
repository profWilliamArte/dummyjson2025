import { Link } from "react-router-dom"


import { FaSun, FaMoon } from 'react-icons/fa'
const Header = ({ darkMode, toggleTheme }) => {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DUMMY JSON</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to ={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ={'/movil'} className="nav-link" href="#">Movil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ={'/laptop'} className="nav-link" href="#">Laptops</Link>
                        </li>
                         <li className="nav-item">
                            <Link to ={'/tienda'} className="nav-link" href="#">Tienda</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        
                    </form>
                    <button onClick={toggleTheme} className="btn btn-dark btn-sm ">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Header