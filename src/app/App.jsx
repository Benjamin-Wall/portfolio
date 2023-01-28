import React from "react";
import { Provider } from "react-redux";

//Import Relevent CSS
import "../assets/css/normalize.css";
import "../index.css";
import "../App.css";

//Import Redux Store
import Store from "./Store";

//Import Components
import { Hero } from "../Components/Hero/Hero";
import { About } from "../Components/About/About";
import { Skills } from "../Components/Skills/Skills";
import { Projects } from "../Components/Projects/Projects";

function App() {
  return (
    <Provider store={Store}>
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </Provider>
  );
}

export default App;
