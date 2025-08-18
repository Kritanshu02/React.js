import { useState } from 'react'

function Update() {
    const[count, setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
    }
  return (
    <>
    <button onClick={handleClick}>
        click {count} times
    </button>
    </>
  )
}

export default Update