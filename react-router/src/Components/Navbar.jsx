import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    let [active, setActive] = useState('/')

    const handleClick = (path) => {
        setActive(path)
    }

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className={`nav-link ${active === '/' ? 'highlight' : ""}`}
                        onClick={()=>handleClick('/')}
                        >All</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/full-stack-development' className={`nav-link  ${active === '/full-stack-development' ? 'highlight' : ""}`}
                        onClick={()=>handleClick('/full-stack-development')}
                        >Full Stack Development</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/data-science' className={`nav-link  ${active === '/data-science' ? 'highlight' : ""}`} 
                        onClick={()=>handleClick('/data-science')}
                        >Data Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cyber-security' className={`nav-link  ${active === '/cyber-security' ? 'highlight' : ""}`}
                        onClick={()=>handleClick('/cyber-security')}
                        >Cyber Security</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/career' className={`nav-link  ${active === '/career' ? 'highlight' : ""}`} 
                        onClick={()=>handleClick('/career')}
                        >Career</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
}

export default Navbar