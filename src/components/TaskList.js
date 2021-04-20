import React, { Component } from 'react'
import TaskItem from './TaskItem'



class TaskList extends Component {
    constructor(props) {
        super(props);

     
        }
   
    
    render(){
        return(
            <ul>
                {this.props.tasks.map((task, id) => {
                    return (
                            <div key={id} >
                                 <TaskItem tasks={task} handleRemove={this.handleRemove}/>
                               </div>
                            
                    )
                }
                )}
           </ul>
        )
    }

}  

    

export default TaskList