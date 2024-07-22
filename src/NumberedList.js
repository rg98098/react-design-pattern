import React from 'react'

function NumberedList({items, resourceName, itemComponent: ItemComponent}) {
  return (
    <>
    {items.map((item,i)=>{

        return (
            <>
         <h3>{i + 1}</h3>
        <ItemComponent key={i} {...{[resourceName]: item}} />
        </>
        )
    })}
    </>
  )
}

export default NumberedList