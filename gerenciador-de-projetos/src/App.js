import "./App.css";

function App() {
  const url = "https://via.placeholder.com/200";

  function soma (a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Projeto inicializado!</h1>
      <p>Gerenciador de Projetos</p>
      <p>Soma: {soma(10,15)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
