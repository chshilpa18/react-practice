import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
        id: 1,
        age: 20,
        name: "Clark",
        skill: "Angular"
    }, {
        id: 2,
        age: 30,
        name: "Diana",
        skill: "Vue"
     }, {
        id: 3,
        age: 35,
        name: "Bruce",
        skill: "React"
     }
    ]
    // better way to do it is to seperate the JSX in a seperate component
    // here key prop is added to make each item unique to stop warning - 
    // Key is not a prop  (it is reserved )- it cannot be used in child component
    // when id is not available then use index as key - its an antipattern.
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return (
        <div>
            {personList}

            {/* {
                list.map(name => <h2>{name}</h2>)
            } */}

            {/* <h2>{list[0]}</h2>
            <h2>{list[1]}</h2>
            <h2>{list[2]}</h2> */}
        </div>
    )
}

export default NameList
