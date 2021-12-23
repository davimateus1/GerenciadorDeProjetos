import styles from './Home.module.css';

import savings from '../../../img/savings.svg';
import LinkButton from '../../layout/LinkButton/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Organize e gerencie seus projetos em um só lugar!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home;