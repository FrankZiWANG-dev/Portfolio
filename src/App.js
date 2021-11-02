import {React, useEffect} from 'react';
import './assets/css/App.css';
import './assets/css/output.css';
import WebFont from "webfontloader";

import Title from "./assets/components/Title.js";
import Intro from "./assets/components/Intro.js";
import Education from "./assets/components/Education.js";
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
    <div className="App font-loader h-screen w-screen 
    bg-gradient-to-r from-gray-700 via-gray-900 to-black
    text-gray-100
    ">
      <Title/>
      <Intro/>
      <Education/>
      <Techs/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
