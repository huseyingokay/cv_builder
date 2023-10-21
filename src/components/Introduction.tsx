import React, { useState } from "react";

export function Introduction() {
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
    let name = e.currentTarget.name;
 
    setPersonalInfo((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  };

  return (
    <div>
      <input
          type='string'
          id="name"
          className='name'
          placeholder='Add Your Name'
      ></input>

      <input
          type='string'
          id="surname"
          className='surname'
          placeholder='Add Your Surname'
      ></input>

      <input
          type='string'
          id="number"
          className='number'
          placeholder='Add Your Phone Number'
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
            ></input>
            <button onClick={(e) => deleteLink(index, e)}> Delete Link</button> 
        </div>
      )
      })}

    <button onClick={addLink}> Add Link</button> 
      
   </div>
  )
}
