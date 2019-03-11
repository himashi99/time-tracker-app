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
            <ul>
                {
                    this.state.clients.map((client) =>
                        <li key={client.id}>{client.company}</li>
                    )
                }
            </ul>
        )
    }
}