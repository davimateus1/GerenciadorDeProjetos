import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "../../layout/Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Costs</span> By: Davi Mateus &copy; 2021
      </p>
    </footer>
  );
}

export default Footer;
