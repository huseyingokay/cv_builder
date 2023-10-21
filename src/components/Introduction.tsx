import React, { useState } from "react";
import { personalInfoType } from "./CVComponent";


type IntroductionProps = {
  setLinksChild: (links: string[]) => void;
  setPersonalInfochild: (links: personalInfoType) => void;
}

export function Introduction({setLinksChild, setPersonalInfochild} : IntroductionProps) {
  const [links, setLinks] = useState([""]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    phone: ""
  });

  const addLink = (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLinks([...links, ""])
  }

  const deleteLink = (index:number, e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let data = [...links]
    data.splice(index, 1)
    setLinks(data)
  }

  const handleChange = ( e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    let value = e.currentTarget.value;
    let name = e.currentTarget.className;
 
    setPersonalInfo((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })

    setPersonalInfochild(personalInfo)
  };

  const handleLinkChange = (index:number, e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    let data = [...links];
    data[index] = e.currentTarget.value;
    setLinks(data);
    setLinksChild(data)
  };

  return (
    <div>
      <input
          type='string'
          id="name"
          className='name'
          placeholder='Add Your Name'
          value={personalInfo.name}
          onChange={(e) => handleChange(e)}
      ></input>

      <input
          type='string'
          id="surname"
          className='surname'
          placeholder='Add Your Surname'
          value={personalInfo.surname}
          onChange={(e) => handleChange(e)}
      ></input>

      <input
          type='string'
          id="phone"
          className='phone'
          placeholder='Add Your Phone Number'
          value={personalInfo.phone}
          onChange={(e) => handleChange(e)}
      ></input>
          
      {links.map((link, index) => {
      return (
        <div key={index}>
            <input
                type='text'
                id="link"
                className='link'
                placeholder='Add Link'
                value={link}
                onChange={(e) => {handleLinkChange(index, e)}}
            ></input>
            <button onClick={(e) => deleteLink(index, e)}> Delete Link</button> 
        </div>
      )
      })}

    <button onClick={addLink}> Add Link</button> 
      
   </div>
  )
}
