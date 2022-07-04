import React from 'react'

function Cow({ cow, clicker, deleter, updater }) {

  const clickHandler = (id) => {
    clicker(id)
  }

  const clickHandler2 = (id) => {
    deleter(id)
  }

  const editHandler = () => {
    let name = prompt('Enter new name')
    let description = prompt('Enter new definition')
    let obj = {name, description}
    updater(cow._id, obj)
  }

  return (
    <div>
      <div>
        <h2 onClick={() => clickHandler(cow._id)}>{cow.name}
      </h2>
    </div>
      <button onClick={editHandler}> Edit </button>
      <button onClick={() => clickHandler2(cow._id)}> X </button>
    </div>
  )
}





export default Cow