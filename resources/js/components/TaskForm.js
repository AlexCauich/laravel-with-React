import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: ''
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangePriority = this.handleChangePriority.bind(this);

    }

    handleChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    handleChangeResponsible(e) {
        this.setState({responsible: e.target.value});
    }

    handleChangeDesc(e) {
        this.setState({description: e.target.value});
    }

    handleChangePriority(e) {
        this.setState({priority: e.target.value});
    }

    render() {
        return(
            <div className="card mt-4">
                <div className="card-header">New Task</div>
                <form className="card-body">
                   <div className="form-group">
                       <input className="form-control" name="title" placeholder="Title" type="text" onChange={this.handleChangeTitle} />
                   </div> 
                   <div className="form-group">
                       <input className="form-control" name="responsible" placeholder="Responsible" type="text" onChange={this.handleChangeResponsible} />
                   </div> 
                   <div className="form-group">
                       <input className="form-control" name="description" placeholder="Description" type="text" onChange={this.handleChangeDesc} />
                   </div> 
                   <div className="form-group">
                       <select className="form-control" name="priority" onChange={this.handleChangePriority} >
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