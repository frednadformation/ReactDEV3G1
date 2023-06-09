import React, {useContext} from 'react'

import {CountContext} from '../App'

function ComposantA() {
  const countContext = useContext(CountContext)

  return (
    <div>
    ComposantA {countContext.countState}
    <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComposantA