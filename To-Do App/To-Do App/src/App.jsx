import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((todos, index) => index !== indexToRemove));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditInput(todos[index]);
  };
  const saveEdit = (index) => {
    if (editInput.trim() === '') return;
    const updatedTodos = [...todos];
    updatedTodos[index] = editInput;
    setTodos(updatedTodos);
    setEditIndex(null)
    setEditInput('')

  };

  const cancelEdit = () => {
   setEditIndex(null)
   setEditInput('')
  };

  return (
    <div className="flex h-[100vh] items-center justify-center bg-gray-200">
      <div className="bg-gray-400 p-8 h-auto my-auto rounded-xl flex-col snap-x">
        <h1 className="text-4xl font-bold text-center text-black mb-5">Todo App</h1>
        <div className="flex mb-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 p-3 rounded-lg border"
          />
          <button
            onClick={addTodo}
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-xl"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded-lg"
            >
              {editIndex === index ? (
                <>
                  <input
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="p-2 rounded-lg"
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-lg"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-black">{todo}</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => startEditing(index)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTodo(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
