import React from 'react'
import Cow from './Cow.jsx'

function CowList({ cowlist, clicker, deleter, updater }) {

  const display = () => {
    if(cowlist.currDef.length > 0) {
      let filter = cowlist.cows.filter(cow => cow._id === cowlist.currDef)
      return (
        <h1>
          {filter[0].name} : {filter[0].description}
        </h1>
      )
    } else {
      return <></>
    }
  }

  return (
    <div>
      {display()}
      {cowlist.cows.map(cow => <Cow key={cow._id} cow={cow} clicker={clicker} deleter={deleter} updater={updater}/>)}
    </div>
  )
}

export default CowList