import React from "react";
import { ExperienceComponent } from "./CVComponent";

type ExperienceProps = {
  experiences: ExperienceComponent[];
  setExperiences: (experiences: ExperienceComponent[]) => void;
};

export function Experience({experiences, setExperiences} : ExperienceProps) {
  const handleChange = (index:number, e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    let data = [...experiences];
    data[index][e.currentTarget.className as keyof typeof experiences[0]] = e.currentTarget.value;
    setExperiences(data);
  };

  const addFields = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setExperiences([...experiences, {
      title: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    }])
  }

  const deleteExperience = (index:number, e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let data = [...experiences];
    data.splice(index, 1)
    setExperiences(data);
  }

  return (
    <div>
      <span> Experiences </span>
      <form className='experienceForm'>
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
                <input
                    type='text'
                    id="title"
                    className='title'
                    placeholder='Add Experience Title'
                    value={experience.title}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='text'
                    id="location"
                    className='location'
                    placeholder='Add Experience Location'
                    value={experience.location}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='date'
                    id="startDate"
                    className='startDate'
                    placeholder='Add Start Date'
                    value={experience.startDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='date'
                    id="endDate"
                    className='endDate'
                    placeholder='Add End Date'
                    value={experience.endDate}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>

                <input
                    type='string'
                    id="description"
                    className='description'
                    placeholder='Add Description'
                    value={experience.description}
                    onChange={(e) => {handleChange(index, e)}}
                ></input>
                <button onClick={(e) => {deleteExperience(index, e)}}>Delete</button>
            </div>
            )
            
        })}
      
      <button onClick={addFields}> Add Experience</button>  
	  </form>

      <ul className='list-group'>
			{experiences.map((todo, index) => (
                        <div key = {index}>
                            <span>{todo.description}</span> 
                        </div>
                      ))}
		</ul>
    </div>
  );
}