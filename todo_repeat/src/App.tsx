import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type filterValueType = 'all' | 'active' | 'completed'

function App() {


    const [task, setTask] = useState([
        {id: 1, title: 'HTML1', isDone: false},
        {id: 2, title: 'Js1', isDone: true},
        {id: 3, title: 'React1', isDone: false},
        {id: 4, title: 'React1', isDone: true}
    ])


    const removeTask = (id: number) => {
        let filteredTask = task.filter(t => t.id !== id)
        setTask(filteredTask)
    }


    let [filter,setFilter] = useState<filterValueType>('all')

    let taskForTodoList = task


    if (filter === 'active'){
        taskForTodoList = task.filter(t=> t.isDone === false)
    }
    if (filter === 'completed'){
        taskForTodoList = task.filter(t=> t.isDone === true)
    }
    
    const changeFilter = (value:filterValueType) => {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist
                title='Title1'
                tasks={taskForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}


export default App;
