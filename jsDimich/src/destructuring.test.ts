import React from 'react';
import {ManType} from "./destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Victor',
        age: 23,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'lynkova'
            }
        }
    }
})

test('', () => {


    // const age = props.age
    // const lessons = props.lessons


    const {age, lessons} = props
    const {title} = props.address.street

    const a = props.age
    const l = props.lessons


    expect(age).toBe(23)
    expect(lessons.length).toBe(2)
    expect(title).toBe('lynkova')

})

test('', () => {

    const [l1, l2] = props.lessons
    //const l1 = props.lessons[0]
    //const l2 = props.lessons[1]

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
})


