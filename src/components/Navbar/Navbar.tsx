import './Navbar.css'
import logo from '../../assets/meta/logo.png'

const Navbar = () => {
    return (
        <>
            <nav className='nav'>
                <div className="nav-container">
                    <div className="logo">
                        <img className='logo-img' src={logo} alt="" />
                        <h1 className="logo-text">Plug 'n Play</h1>
                    </div>
                    <div className="login">
                        <button className="btn login-btn">
                            Log in
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar