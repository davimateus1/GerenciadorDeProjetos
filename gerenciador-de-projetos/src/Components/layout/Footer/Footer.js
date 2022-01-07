import { Link } from "react-router-dom";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../../layout/Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.instagram.com/davimateus1/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/davimateus1" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davimateusg/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Costs</span> By: Davi Mateus &copy; 2021
      </p>
    </footer>
  );
}

export default Footer;
