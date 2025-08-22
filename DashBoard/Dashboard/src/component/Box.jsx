import React from 'react'

const Box = ({heading, data}) => {
  return (
      <div className='dashBoard-box max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white '>
        <h3>{heading}</h3>
        <p>{data ? data : 0}</p>
      </div>
  )
}

export default Box