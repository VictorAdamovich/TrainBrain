import React from "react";
import {filterValueType} from "./App";


type propsType = {
    title: string
    tasks: Array<taskType>
    removeTask: (taskId:number) => void
    changeFilter: (value:filterValueType) => void
}

type taskType = {
    id: number
    title: string
    isDone: boolean
}


export function Todolist(props: propsType) {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={()=>props.removeTask(t.id)}>x</button>
                    </li>)}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('all')}>All</button>
                <button onClick={()=>props.changeFilter('active')}>Active</button>
                <button onClick={()=>props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}