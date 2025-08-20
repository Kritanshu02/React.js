import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((todos, index) => index !== indexToRemove));
  };

  const editTodo = (indexToEdit) => {
    const newTodo = prompt('Edit your task:', todos[indexToEdit]);
    if(newTodo===null || newTodo.trim()==="") return;
    const updatedTodos = [...todos];
    updatedTodos[indexToEdit] = newTodo;
    setTodos(updatedTodos)


  };

  return (

    <div className="flex h-[100vh] item-center justify-center bg-gray-200">
      <div className="bg-gray-400 p-8 h-100 my-auto rounded-xl flex-col snap-x ">
        <h1 className="text-4xl font-bold text-center text-black mb-5">Todo App</h1>
        <div className="flex mb-5">
        <input
        type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 p-3 rounded-1-lg border "
        />
        <button onClick={addTodo}
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-xl">Add</button>
        </div>
        <ul  className="space-y-3">
          {todos.map((todo, index) => (
            <li key={index}
            className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded-lg">
              <span className="text-black">{todo}</span>
              <div className="flex gap-3">
              <button onClick={() => editTodo(index)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded">Edit</button>
              <button onClick={() => removeTodo(index)}
               className="bg-red-500 hover:bg-red-600 text-black px-2 py-1 rounded ">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;