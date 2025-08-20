import React from 'react'
import { useState } from 'react'

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])

    
    const handleInputchange = (value) => {
        setInputValue(value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue])
        setInputValue("")
    }
    return (
        <>
            <section className='todoContainer'></section>
            <header>
                <h1>ToDo List</h1>
            </header>
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className='todo-input'
                            autoComplete='off'
                            value={inputValue}
                            onChange={(event) => handleInputchange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className='todo-item' >
                                <span>{curTask}</span>
                                <button className='check-btn'>Complete</button>
                                <button className='delete-btn'>Delete</button>

                            </li>
                        })
                    }
                </ul>
            </section>

        </>
    )
}

export default ToDo