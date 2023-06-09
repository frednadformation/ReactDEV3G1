import React from 'react'

function NameList() {
    const names = ['John', 'Malcolm', 'Richard']
  return (
    <div>
        {/* <div>{names[0]}</div>
        <div>{names[1]}</div>
        <div>{names[2]}</div> */}
        {
        names.map(name =><h2>{name}</h2>)
       }

    </div>
  )
}

export default NameList