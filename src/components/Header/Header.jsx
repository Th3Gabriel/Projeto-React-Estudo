import { Link } from 'react-router-dom'

//CSS
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} /> </Link>

                    <nav>
                        <ul className='d-flex'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Header