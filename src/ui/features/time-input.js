import React from 'react';
import { getClientProjects} from '../../api'

export class TimeInput extends React.PureComponent {

    state = {
        clients: []
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

    render() {
        return (
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
        )
    }
}