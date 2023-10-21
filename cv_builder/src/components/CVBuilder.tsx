import React, { useState } from "react";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { Education } from "./Education";
import { Introduction } from "./Introduction";
import { Route, Routes, useNavigate } from "react-router-dom";
import PdfBuilder from "./PdfBuilder";

export function CVBuilder() {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([{
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  }]);

  const [schools, setSchools] = useState([{
    name: "",
    startDate: "",
    endDate: "",
    gpa: "",
  }]);

  const [projects, setProjects] = useState([{
    name: "",
    startDate: "",
    endDate: "",
    description: "",
  }]);

  const createCV = () => {
    navigate("/pdf")
  }

  return (
    <Routes>
    <Route path='/' element={
        <div>
        CV Builder
        <Introduction />
        <Education schools={schools} setSchools={setSchools}/>
        <Experience experiences={experiences} setExperiences={setExperiences}/>
        <Project projects={projects} setProjects={setProjects}/>
        <button onClick={createCV}> Create a PDF CV!</button> 
        </div>
        }>
    </Route>
    <Route path='/pdf' element={<PdfBuilder schools={schools} experiences={experiences} projects={projects}/>}> </Route>
    </Routes>   

  );
}
