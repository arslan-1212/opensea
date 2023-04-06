import React from 'react'
import Sort_data from '../Sort_data/Sort_data'

function Sort_canvas() {
  return (
    <div>
        {[ 'bottom'].map((placement, idx) => (
        <Sort_data key={idx} placement={placement} name={placement} />
      ))}
    </div>
  )
}

export default Sort_canvas
