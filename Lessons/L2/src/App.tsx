import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';



export type filterValuesType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<filterValuesType>('all')

    function removeTask(id: number) {
        let filterTasks = tasks.filter((t) => t.id !== id)
        setTasks(filterTasks)
    }

    function changeFilter(value:filterValuesType){
        setFilter(value)

    }

    let tasksForTodoList = tasks;
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
