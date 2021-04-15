import React from 'react'
import uniqid from 'uniqid'

const TaskList = (props) => {
    const { tasks } = props;
    console.log(tasks)
   
        return(
            <ul>
                {tasks.map((task) => {
                    return <li key={uniqid}>{task}</li>
                }
                )}
            </ul>
        )
    }
    

export default TaskList