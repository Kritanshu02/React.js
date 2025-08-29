// Make a Counter app using useState with two buttons → Increment & Decrement.

// import React, { useState } from 'react'

// function App() {
//   const[count, setCount]=useState(0)
//   const[decrement, setdecrement]=useState(100)
  
//   function handleCount(){
//     setCount(count+1)
//   }
//   function handleDecrement(){
//     setdecrement(decrement-1)
//   }
//   return (
//     <>
//     <button onClick={handleCount}>
//       Count {count} Increses
//     </button>

//     <button onClick={handleDecrement}>
//       Decrement by {decrement} times
//     </button>
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const[type, setType]=useState()



// function App() {
//   return (
//     <div>
//       <input type="text"
//       placeholder="type here"
//       value={text}
//       onChange={(e)=>setType(e.target.value)}
//       >
      
//       </input>
//     </div>
//   )
// }

// export default App


// Show a list of fruits using map() in JSX.


// import React from "react";

// export default function FruitList() {
//   const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

//   return (
//     <div>
//       <h2>Fruit List</h2>
//       <ul>
//         {fruits.map((fruit, id) => (
//           <li key={id}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


