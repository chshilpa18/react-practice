import React from 'react'

// when id is not available then use index as key - its an antipattern.
// Only use Index as key if - all 3 condition meet
//  list items do not have unique id
// your list is static 
// List will never be orderd or filtered


function NameList() {
    const names = ["Clark","Diana","Bruce", "Bruce"]
    
    const nameList = names.map( (name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
