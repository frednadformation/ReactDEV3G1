import React from 'react'

import './styles/person.css'


function Person() {
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]

      const personList  = persons.map((person) => (
        person.name == 'Diana' ? 
        <h2 className='diana'> I am the {person.name}. I am {person.age} years old. I know {person.skill}</h2> 
        :
        <h2 className='primary'> I am the {person.name}. I am {person.age} years old. I know {person.skill}</h2>
      ))
    
      

  return (
    <div>{personList}</div>
  )
}

export default Person