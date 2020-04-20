import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navigation from './components/Navigation';
import { tasks } from './tasks.json';
import TaskForm from './components/TaskForm';

class Index extends Component {
    constructor(){
        super();
        this.state = {
            tasks
        }

        this.handleAddTasks = this.handleAddTasks.bind(this);
    }

    handleAddTasks(tasks) {
        this.setState({
            tasks: [...this.setState.tasks, task]
        });
    }

    renderTasks() {
        return this.state.tasks.map((task, i) => {
            return(
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{task.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {task.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{task.responsible}</p>
                            <p><marker>{task.description}</marker></p>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="App">
                <Navigation onNumber={this.state.tasks.length} title="App with React"/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <TaskForm  onAddTasks={this.handleAddTasks}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
