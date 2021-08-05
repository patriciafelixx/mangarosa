import React, { Component } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import api from '../services/api';
import './Index.css';

class Index extends Component {

    state = {
        records: []
    }

    async componentDidMount() {
        const response = await api.get('registros');
        this.setState({ records: response.data });
    }

    render() {
        const { records } = this.state;

        return (
            <Container className="content">
                <h2 className="mt-5">PONTO ELETRÔNICO</h2>
                <p className="mb-3 text-muted">Registro de Funcionários:</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th class="col-md-1">#</th>
                            <th class="col-md-6">Nome</th>
                            <th class="col-md-5" colSpan="2">Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map(record => (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.active ? 'Validado' : "Não Validado"}</td>
                                <td><Button href={`${record.slug}/ativar`} variant="outline-danger">ver detalhes</Button></td>
                            </tr>
                        ))}
                    </tbody>

                </Table>

            </Container>
        )
    }
}

export default Index;