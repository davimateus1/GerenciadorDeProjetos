import styles from "./ProjectEdit.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
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
  }, [id]);

  return <h1>{project.name}</h1>;
}

export default ProjectEdit;
