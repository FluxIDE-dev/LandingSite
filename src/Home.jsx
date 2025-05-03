import { FaArrowRight, FaLinux } from 'react-icons/fa';
import Nav from './Components/Nav';
import styles from './Home.module.css';
import { BsUbuntu } from 'react-icons/bs';
import Footer from './Components/Footer';

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

            <div className={styles.video}>
            <video playsinline="" autoplay="" controlslist="nodownload nofullscreen noremoteplayback" disablepictureinpicture=""><source src="https://pearai.b-cdn.net/pearai-agent-welcome-2.mp4" type="video/mp4"/></video>
            </div>
        </header>


        <Footer />
    </>
}

export default Home;