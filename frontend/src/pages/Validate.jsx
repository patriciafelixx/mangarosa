import React, { Component } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import api from '../services/api';

class Validate extends Component {

    state = {
        record: {}
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        const response = await api.get(`${slug}/validar`);
        this.setState({ record: response.data });
    }

    render() {
        const { record } = this.state;

        return (
            <Container className="content">
                <h2 className="mt-5">PONTO ELETRÔNICO</h2>
                <p className="mb-3 text-muted">Validação de Registro:</p>

                <Card>
                    <Card.Header>
                        <Card.Subtitle className="mb-1 mt-2 text-muted">NOME:</Card.Subtitle>
                        <Card.Title>{record.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>

                        <Card.Subtitle className="mb-1 mt-2 text-muted">CPF:</Card.Subtitle>
                        <Card.Title className="mb-3">{record.cpf}</Card.Title>

                        <Card.Subtitle className="mb-1 mt-2 text-muted">E-MAIL:</Card.Subtitle>
                        <Card.Title className="mb-3">{record.email}</Card.Title>

                        <Card.Subtitle className="mb-1 mt-2 text-muted">CELULAR:</Card.Subtitle>
                        <Card.Title className="mb-3">{record.phone}</Card.Title>

                        <Card.Subtitle className="mb-1 mt-2 text-muted">CONHECIMENTOS:</Card.Subtitle>
                        <Card.Title className="mb-3">{record.skills}</Card.Title>

                        <Card.Text className="mt-4">
                            Confirme todos os dados fornecidos pelo usuário para validação do registro.
                        </Card.Text>

                        <div className="d-flex justify-content-between">
                            <Button variant="success">VALIDAR</Button>
                            <Button variant="outline-secondary">NÃO VALIDAR</Button>
                        </div>

                    </Card.Body>
                    <Card.Footer className="text-muted">{`Atualizado em ${record.updatedAt}`}</Card.Footer>
                </Card>

            </Container>
        )
    }
}

export default Validate;