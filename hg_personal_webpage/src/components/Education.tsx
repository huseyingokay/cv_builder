import React, { useState } from "react";

export function Education() {
  const [schools, setSchools] = useState([{
    name: "",
    startDate: "",
    endDate: "",
    gpa: "",
  }]);

  const handleChange = (index:number, e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    let data = [...schools];
    data[index][e.currentTarget.className as keyof typeof schools[0]] = e.currentTarget.value;
    setSchools(data);
  };

  const addFields = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSchools([...schools, {
      name: "",
      startDate: "",
      endDate: "",
      gpa: "",
    }])
  }

  const deleteProject = (index:number, e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let data = [...schools];
    data.splice(index, 1)
    setSchools(data);
  }

  return (
    <div>
      <span> Schools </span>
      <form className='projectForm'>
        {schools.map((project, index) => {
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
                    id="gpa"
                    className='gpa'
                    placeholder='Add gpa'
                    value={project.gpa}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>
                <button onClick={(e) => {deleteProject(index, e)}}>Delete</button>
            </div>
            )
            
        })}
      
      <button onClick={addFields}> Add Project</button>  
	  </form>

      <ul className='list-group'>
			{schools.map((project, index) => (
                        <div key = {index}>
                            <span>{project.gpa}</span> 
                        </div>
                      ))}
		</ul>
    </div>
  );
}
