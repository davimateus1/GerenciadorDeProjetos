import { FaReact } from "react-icons/fa";

import styles from './Company.module.css';

function Company() {
    return (
        <section className={styles.company_container}>      
            <h1>Sobre o <span>Projeto</span></h1>
            <p>O Costs é um projeto criado no intuito de treinar <a href="https://pt-br.reactjs.org" target="_blank"><b>ReactJS <FaReact /></b> </a> e suas funcionalidades, este projeto é um Gerenciador de Projetos, com ele você pode criar projetos, definir um orçamento e selecionar o tipo de categoria que o seu projeto se encaixa, caso tenha errado algo, você tem a possibilidade de editar dados do seu projeto, e se já tiver concluido, você pode excluir o projeto. Além disso, você pode adicionar serviços ao seu projeto informando o nome, o custo e a descrição deste serviço (lembrando que os serviços não podem ultrapassar o valor total do projeto, hein?! 😉), caso tenha desistido ou errado o serviço, você pode facilmente o excluir. </p>
            <h4>Bom, no geral é isso, seja bem vindo ao <span>Costs</span>!</h4>
        </section>
    )
}

export default Company;