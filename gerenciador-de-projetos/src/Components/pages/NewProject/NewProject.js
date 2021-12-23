import ProjectForm from '../../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto e logo após, adicione os seus serviços!</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject;