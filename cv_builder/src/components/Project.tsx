import React from "react";
import { ProjectComponent } from "./CVComponent";

type ProjectProps = {
  projects: ProjectComponent[];
  setProjects: (projects: ProjectComponent[]) => void;
};

export function Project({projects, setProjects} : ProjectProps) {
  const handleChange = (index:number, e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    let data = [...projects];
    data[index][e.currentTarget.className as keyof typeof projects[0]] = e.currentTarget.value;
    setProjects(data);
  };

  const addFields = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setProjects([...projects, {
      name: "",
      startDate: "",
      endDate: "",
      description: "",
    }])
  }

  const deleteProject = (index:number, e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let data = [...projects];
    data.splice(index, 1)
    setProjects(data);
  }

  return (
    <div>
      <span> Projects </span>
      <form className='projectForm'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
                <input
                    type='text'
                    id="name"
                    className='name'
                    placeholder='Add Project Name'
                    value={project.name}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='date'
                    id="startDate"
                    className='startDate'
                    placeholder='Add Start Date'
                    value={project.startDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='date'
                    id="endDate"
                    className='endDate'
                    placeholder='Add End Date'
                    value={project.endDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='string'
                    id="description"
                    className='description'
                    placeholder='Add Description'
                    value={project.description}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>
                <button onClick={(e) => {deleteProject(index, e)}}>Delete</button>
            </div>
            )
            
        })}
      
      <button onClick={addFields}> Add Project</button>  
	  </form>

      <ul className='list-group'>
			{projects.map((project, index) => (
                        <div key = {index}>
                            <span>{project.description}</span> 
                        </div>
                      ))}
		</ul>
    </div>
  );
}
