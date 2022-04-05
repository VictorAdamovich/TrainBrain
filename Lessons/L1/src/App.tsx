import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {

    const tasks1:Array<TaskType> = [
        {id: 1, title: 'Html', isDone: true},
        {id: 2, title: 'Css', isDone: false},
        {id: 3, title: 'React', isDone: true}
    ]

    const tasks2:Array<TaskType> = [
        {id: 1, title: 'Terminators', isDone: false},
        {id: 2, title: 'XXX', isDone: true},
        {id: 3, title: 'Jentelments of fortune', isDone: true},
    ]

    const tasks3:Array<TaskType> = [
        {id: 1, title: '123', isDone: true},
        {id: 2, title: '345', isDone: true},
        {id: 3, title: '567 of fortune', isDone: false}
    ]


    return (
        <div className="App">
            <TodoList title={'what to learn'} tasks={tasks1}/>
            <TodoList title={'Movies'} tasks={tasks2}/>
            <TodoList title={'Sis'} tasks={tasks3}/>
        </div>
    );
}

export default App;
