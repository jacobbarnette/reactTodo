import React, { Component } from 'react'
import TaskItem from './TaskItem'
import nextId from 'react-id-generator'

class TaskBar extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmitTask = this.onSubmitTask.bind(this)
       
        this.state = {
            task: "",
            tasks: [],
            id: nextId()
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            task: e.target.value
        });
    }

    onSubmitTask(e) {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ""
        })
    }
       
    
    render() {
        const { task, tasks } = this.state;
        return(
            <div className="TaskBar">
                <form action="" onSubmit={this.onSubmitTask}>
                
                    <label htmlFor=""> 
                        Add a Task: 
                        <input 
                            value={task}
                            onChange={this.handleChange}
                            id='taskBar'
                            type="text"/>
                    </label>
                    <button
                            onClick={this.onChange}
                            >
                    </button>
                    
            
                </form>
               <TaskItem tasks={tasks} />
            </div>
        )
    }
}

export default TaskBar