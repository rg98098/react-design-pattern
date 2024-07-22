import React from 'react'

function SmallPersonListItem({person}) {
    const { name, age } = person
  return (
    <p>Name: {name}, Age: {age}</p>
  )
}

export default SmallPersonListItem