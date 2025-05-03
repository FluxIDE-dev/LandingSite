import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <h3>CodeEditor</h3>
            <p>Building the future of development, one line at a time.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#community">Community</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.column}>
            <h4>Stay Updated</h4>
            <form className={styles.newsletter}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; 2024 CodeEditor. All rights reserved.</p>
          <div className={styles.social}>
            <a href="https://github.com" aria-label="GitHub">
              <FaGithub/>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;