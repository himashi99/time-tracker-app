import React from 'react';
import { getClientProjects } from '../../api'

export class TimeInput extends React.PureComponent {

    state = {
        clients: [],
        selectedClientId: null,
    }

    componentDidMount() {
        console.log("component did mount")
        getClientProjects().then((responseOfClients) => {
            console.log("data received")
            this.setState({
                clients: responseOfClients
            })
        })
    }

    handleClientSelectionEvent = (event) => {
        console.log("the selected value is", event.target.value);
        this.setState({
            selectedClientId: event.target.value,
        })
    }


    render() {
        const theProjectsList = this.state.clients
            .filter((client) => client.id === this.state.selectedClientId)[0];
        return (
            <div>
                <p>Selected Client Id: {this.state.selectedClientId}</p>
                <div>
                    <label htmlFor="clients">Choose a Client: </label>
                    <select onChange={this.handleClientSelectionEvent} id="client">
                        {
                            this.state.clients.map((client) =>
                            <option key={client.id} value={client.id}>{client.company}</option>
                            )
                        }            
                    </select>
                </div>

                <div>
                    <label htmlFor="projects">Choose a Project: </label>
                    <select id="projects">
                        {
                            (this.state.selectedClientId) &&
                                <React.Fragment>
                                    {
                                        this.state.clients
                                            .filter((client) => client.id === this.state.selectedClientId)
                                            .map((oneClient) =>
                                                {
                                                    return oneClient.projects.map((theProject) => 
                                                        <option key={theProject.id} value={theProject.id}>{theProject.name}</option>)
                                                },
                                            )
                                         
                                    }
                                </React.Fragment>
                        }
                    </select>
                </div>


                <ul className="client-list">
                    {
                        this.state.clients.map((client) =>
                            <div key={client.id}>
                                <li><h1>{client.company}</h1></li>
                                {
                                    client.projects.map((project) =>
                                        <li key={project.id}>{project.name}</li>
                                    )
                                }
                                <br />
                                <button>Add Project</button>
                                <input type="text" name="newproject"></input>
                            </div>
                        )
                    }
                </ul>
            </div>
        )
    }
}