import { Link } from 'react-router-dom'
import { useState } from 'react'

//CSS
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

//COMPONENTES
import Button from '../Button/Button'

function Header() {
    const [isOpen, SetisOpen] = useState(false)
    const toggleMenu = () => {
        SetisOpen(!isOpen)
    }
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} /> </Link>
                    <div className='mobile-menu'>
                        <Button buttonStyle="secondary" onClick = {toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick = {toggleMenu}>
                            X
                        </Button>
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