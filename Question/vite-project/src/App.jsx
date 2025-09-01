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



// import React, { useState } from 'react'


// function App() {
//     const [text, setText]= useState("hello")
//     function handleText(e){
//         setText(e.target.value)
//     }
//   return (
//     <>
//     <h1>type Here</h1>
//     <input value={text} onChange={handleText}></input>
//     <p>Your text: {text}</p>
//     <button onClick={()=>setText("hello")}>
//         reset
//     </button>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
//     const[like, setLike]=useState(true)

//     const handleLike=(e)=>{
//         setLike(e.target.checked)
//     }
   
//   return (
//         <>
//         <h1>Like</h1>
//         < input type="checkbox"
//                 checked={like}
//                 onChange={handleLike}/>
//                 <p>{like ? "you liked":"you did not like"} this.</p>
//         </>  )
// }

// export default App



// import React, { useState } from 'react'

// function App() {
//     const[name, setName]=useState("taylor")
//     const[age, setAge]=useState(40)
//   return (
//     <>
//     <input 
//     value={name}
//     onChange={(e)=>setName(e.target.value)}/>
//     <br/>
//     <button 
//     onClick={()=>setAge(age+1)}
//     >Increment your age</button>
    
//     <p>My name is {name} and age is {age}</p>

//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'

// function App() {
//     const[increment, setIncrement] =useState(0)

//     function handleIncrement(){
//         setIncrement(a=>a+1)
        
//     }
//   return (
//     <>
//     <p>Increment by {increment}</p>
//     <button onClick={()=>{
//         handleIncrement();
//         handleIncrement();
//         handleIncrement()
//     }}>+3</button>
//     <button onClick={()=>{
//         handleIncrement()
//     }}>+1</button>
//     </>
//   )
// }
// export default App


// import React, { useState } from 'react'

// function App() {
//     const[form, setForm]=useState([{
//         firstName:"hema",
//         lastname:"kolhatkar",
//         email:"hema@gmail.com"
//     }])
//   return (
//     <>
//     <label>
//         First Name:
//     <input value={form.firstName}
//     onChange={(e)=>setForm({...form, firstName:e.target.value})}
//     ></input>
//     </label>
//     <label>
//         Last Name:
//         <input
//         value={form.lastname}
//         onChange={(e)=>setForm({...form, lastname:e.target.value})}>
//         </input>
//     </label>
//     <label>
//         Email:
//         <input
//         value={form.email}
//         onChange={(e)=>setForm({...form, email:e.target.value})}>

//         </input>
//     </label>
//     <p>
//         {form.firstName}{' '}
//         {form.lastname}{" "}
//         {form.email}
//     </p>
//     </>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react';

function App() {
    const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  return (
    <>
    <label>
         Name:
        <input
        value={person.name}
        onChange={(e)=>setPerson({...person, name:e.target.value})}/>
    </label>
        Tittle:
        <input
        value={person.artwork.title}
        onChange={(e)=>setPerson({...person, artwork:{...person.artwork,
        title:e.target.value}})}></input>
    <label>
        <label>
            City:
            <input 
            value={person.artwork.city}
            onChange={(e)=>setPerson({...person, artwork:{...person.artwork,
                city:e.target.value
            }})}/>
        </label>
        city:
        <input
        value={person.artwork.image}
        onChange={(e)=>setPerson({...person, artwork:{...person.artwork,
            image:e.target.value
        }})}></input>
    </label>
    
    </>
    
  )
}

export default App















