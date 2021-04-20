import React, { Component } from 'react'
import {FaTrash} from "react-icons/fa"
class TaskList extends Component {
    render(){
        
        return (
            <div>
                 {this.props.tasks.map((task, id) => {
                    return (
                            <div key={id} >
                               <li>{task}</li>
                                <button><FaTrash /></button>
                                </div>
                    )
                 })
                }

                    
            </div>
        )    
    }
}
export default TaskList