import React from 'react'

function LargePersonListItem({person}) {
    const { name, age, hobbies, hairColor } = person
  return (
    <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <ul>
            {hobbies.map(hobbie=> <li key={hobbie}>{hobbie}</li>)}
        </ul>
    </>
  )
}

export default LargePersonListItem