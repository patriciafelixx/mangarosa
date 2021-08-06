import React, { Component } from 'react';
import { Button, Container, Card, Form, FormGroup } from 'react-bootstrap';
import api from '../services/api';

class Validate extends Component {

    state = {
        record: {},
        slug: ''
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        const response = await api.get(`${slug}/validar`);
        this.setState({ record: response.data, slug });
    }

    render() {
        const { record, slug } = this.state;

        const onSubmit = async (e) => {
            e.preventDefault();
            await api.put(`http://localhost:3333/${slug}/validar`);
            window.location.reload();

        }

        return (
            <Container className="content">
                <h2 className="mt-5">PONTO ELETRÔNICO</h2>
                <p className="mb-3 text-muted">Validação de Registro:</p>

                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Subtitle className="mb-1 mt-2 text-muted">NOME:</Card.Subtitle>
                            <Card.Title>{record.name}</Card.Title>
                        </div>

                        <div>
                            Situação:
                            <span style={{ color: record.active ? "green" : "red" }}>
                                {record.active ? ' Registro validado ✔' : ' Registro não validado!'}
                            </span>
                        </div>
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

                        <Form onSubmit={onSubmit}>
                            <FormGroup className="d-flex justify-content-end">
                                {record.active ? (
                                    <Button type="submit" variant="outline-secondary">NÃO VALIDAR</Button>
                                ) : (
                                    <Button type="submit" variant="success">VALIDAR</Button>
                                )}
                            </FormGroup>
                        </Form>

                    </Card.Body>
                    <Card.Footer className="text-muted">{`Atualizado em ${record.updatedAt}`}</Card.Footer>
                </Card>

            </Container>
        )
    }
}

export default Validate;