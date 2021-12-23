import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Company from "./Components/pages/Company/Company";
import Contact from "./Components/pages/Contact/Contact";
import Home from "./Components/pages/Home/Home";
import Projects from "./Components/pages/Projects/Projects";
import NewProject from "./Components/pages/NewProject/NewProject";

import Container from "./Components/layout/Container/Container";
import Navbar from "./Components/layout/Navbar/Navbar";
import Footer from "./Components/layout/Footer/Footer";

function App() {
  return (
    <Router>
     <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
