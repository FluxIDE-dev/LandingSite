import { FaArrowRight, FaLinux } from 'react-icons/fa';
import Nav from './Components/Nav';
import styles from './Home.module.css';
import { BsUbuntu } from 'react-icons/bs';

function Home(){
    return <>
        <Nav/>

        <header className={styles.header}>
            <span>The Code Editor You Want <FaArrowRight/></span>
            <h1>Rewriting the Way You Code</h1>
            <p>An AI-powered code editor that adapts to your style</p>

            <div className={styles.buttons}>
                <button><BsUbuntu/> Download for linux</button>
                <button>Learn More</button>
            </div>
        </header>
    </>
}

export default Home;