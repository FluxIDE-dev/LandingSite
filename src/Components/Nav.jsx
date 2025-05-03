import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Nav(){
    return <>
        <div className={styles.nav_container}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img alt='FluxIDE' src='logo.png'/>
                    <h1>FluxIDE</h1>
                </div>

                <ul className={styles.links}>
                    <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : undefined}
                    >
                        <li>Home</li>
                    </NavLink>
                    
                    <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : undefined}
                    >
                        <li>About</li>
                    </NavLink>
                    
                    <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : undefined}
                    >
                        <li>Features</li>
                    </NavLink>
                    
                    <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active" : undefined}
                    >
                        <li>Pricing</li>
                    </NavLink>
                </ul>

                <div className={styles.right}>
                    <a href='/docs'>Docs</a>
                    <a href='/download'>Download</a>
                    <div className={styles.socials}>
                        <button><FaDiscord /></button>
                        <button><FaXTwitter /></button>
                        <button><FaGithub /></button>
                    </div>
                </div>

            </nav>
        </div>
    </>
}

export default Nav;