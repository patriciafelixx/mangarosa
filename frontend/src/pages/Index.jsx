import React, { Component } from 'react';
import api from '../services/api';

class Index extends Component {

    state = {
        records: []
    }

    async componentDidMount() {
        const response = await api.get('registros');
        this.setState({ records: response.data});
    }
    
    render() {
        const { records } = this.state;

        return (
            <div>
                <h1>Lista de Registros</h1>
                {records.map(record => (
                    <li key={record.id}>{record.name} - {record.active ? 'Validado' : "Não Validado"}</li>
                ))}
            </div>
        )
    }
}

export default Index;