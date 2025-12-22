import React from "react";
import ReactDOM from "react-dom/client";
import MainContainer from "./mainContainer/MainContainer.tsx";
import Header from "./sections/header/Header.tsx";
import Experience from "./sections/experience/Experience.tsx";
import Skills from "./sections/skills/Skills.tsx";
import Projects from "./sections/projects/Projects.tsx";
import Navigation from "./sections/navigation/Navigation.tsx";
import CurriculumFooter from "./sections/contact/CurriculumFooter.tsx";
import "./i18n";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
    <MainContainer>
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <CurriculumFooter />
    </MainContainer>
  </React.StrictMode>
);
