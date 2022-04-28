import React from 'react';
export type ManType={
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

const props = {
    name: 'Victor',
    age: 23,
    lessons: [{title:'1'}, {title: '2'}],
    address: {
        street: {
            title: 'lynkova'
        }
    }
}


export const MainConmonent = (props) => {
    const {title,man}=props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>props.man.name</div>
        </div>
    );
};
