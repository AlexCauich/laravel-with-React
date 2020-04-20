import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return(
            <div className="card mt-4">
                <div className="card-header">New Task</div>
                <form className="card-body">
                   <div className="form-group">
                       <input className="form-control" name="title" placeholder="Title" type="text" />
                   </div> 
                   <div className="form-group">
                       <input className="form-control" name="responsible" placeholder="Responsible" type="text" />
                   </div> 
                   <div className="form-group">
                       <input className="form-control" name="description" placeholder="Description" type="text" />
                   </div> 
                   <div className="form-group">
                       <select className="form-control" name="priority">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                       </select>
                   </div> 
                   <button type="submit" className="btn btn-primary btn-block">send</button>
                </form>
            </div>
        )
    }
}

export default TaskForm;