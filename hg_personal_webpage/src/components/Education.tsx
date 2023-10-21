import React from "react";
import { EducationComponent } from "./CVComponent";
  
type SchoolProps = {
    schools: EducationComponent[];
    setSchools: (schools: EducationComponent[]) => void;
};

export function Education({schools, setSchools} : SchoolProps) {
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
      <form className='schooltForm'>
        {schools.map((school, index) => {
          return (
            <div key={index}>
                <input
                    type='text'
                    id="name"
                    className='name'
                    placeholder='Add School Name'
                    value={school.name}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='month'
                    id="startDate"
                    className='startDate'
                    placeholder='Add Start Date'
                    value={school.startDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='month'
                    id="endDate"
                    className='endDate'
                    placeholder='Add End Date'
                    value={school.endDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='string'
                    id="gpa"
                    className='gpa'
                    placeholder='Add gpa'
                    value={school.gpa}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>
                <button onClick={(e) => {deleteProject(index, e)}}>Delete</button>
            </div>
            )
            
        })}
      
      <button onClick={addFields}> Add Project</button>  
	  </form>
    </div>
  );
}
