import {React, useEffect} from 'react';
import './assets/css/App.css';
import './assets/css/output.css';
import WebFont from "webfontloader";
import Title from "./assets/components/Title.js";
import Intro from "./assets/components/Intro.js";
import IT from "./assets/components/IT.js";
import NonIT from "./assets/components/NonIT.js";
import Techs from "./assets/components/Techs.js";
import Projects from "./assets/components/Projects.js";
import Contact from "./assets/components/Contact.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Neuton']
      }
    });
   }, []);

  return (
    <div className="App font-loader
    bg-gradient-to-r from-gray-700 via-gray-900 to-black
    ">
      <Title/>
      <Intro/>
      <IT/>
      <Techs/>
      <Projects/>
      <NonIT/>
      <Contact/>
    </div>
  );
}

export default App;
