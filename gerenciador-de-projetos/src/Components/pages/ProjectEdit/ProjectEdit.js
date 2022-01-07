import styles from "./ProjectEdit.module.css";

import Loading from '../../layout/Loading/Loading'
import Container from '../../layout/Container/Container'
import ProjectForm from "../../project/ProjectForm";
import Message from "../../layout/Message/Message";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(resp => resp.json())
        .then(data => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 1500);
  }, [id]);

  function editPost(project) {

    setMessage('');

    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ter um valor inferior ao custo do projeto!")
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then(data => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto atualizado com sucesso!")
        setType("success");
      })
      .catch(err => console.log(err))

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Orçamento Total:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Salvar Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um novo serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar um serviço' : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <div>
                    formulario de serviço
                  </div>
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              <p>Itens de Serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProjectEdit;
