import React, { Component } from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import api from '../services/api';

class RegisterForm extends Component {

    state = {
        name: '',
        email: '',
        cpf: '',
        phone: '',
        skills: '',
        slug: ''
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        this.setState({ slug });
    }

    render() {
        const onChange = e => {
            const { name, value } = e.target;
            this.setState({ ...this.state, [name]: value });
        }

        const onSubmit = async (e) => {
            e.preventDefault();

            await api.post(`http://localhost:3333/${this.state.slug}/registrar`, this.state)
                .then(response => {
                    response.status === 200 && alert('Cadastro efetuado com sucesso!');;
                })
                .catch(err => {
                    const json = err.request.response;
                    const obj = JSON.parse(json)
                    obj.error.errors.map(err => {
                        console.log(err.message);
                    })
                });
        }

        return (
            <Container className="content">
                <h2 className="mt-5">PONTO ELETRÔNICO</h2>
                <p className="mb-3 text-muted">Preencha com seus dados para registro no sistema de ponto eletrônico:</p>

                <Form onSubmit={onSubmit}>
                    <FormGroup className="mb-2">
                        <Form.Label htmlFor="name">Nome</Form.Label>
                        <Form.Control type="text" id="name" name="name"  onChange={onChange} />
                    </FormGroup>
                    <FormGroup className="mb-2">
                        <Form.Label htmlFor="email">E-mail</Form.Label>
                        <Form.Control type="email" id="email" name="email" onChange={onChange} />
                    </FormGroup>
                    <FormGroup className="mb-2">
                        <Form.Label htmlFor="cpf">CPF</Form.Label>
                        <Form.Control type="text" id="cpf" name="cpf" placeholder="000.000.000-00" onChange={onChange} />
                    </FormGroup>
                    <FormGroup className="mb-2">
                        <Form.Label htmlFor="phone">Celular</Form.Label>
                        <Form.Control type="text" id="phone" name="phone" onChange={onChange} />
                    </FormGroup>
                    <FormGroup className="mb-2">
                        <Form.Label htmlFor="skills">Conhecimentos</Form.Label>
                        <Form.Control type="text" id="skills" name="skills" onChange={onChange} />
                    </FormGroup>

                    <FormGroup className="mt-4">
                        <Button type="submit" variant="success">ENVIAR</Button>
                    </FormGroup>
                </Form>

            </Container>
        )
    }
}

export default RegisterForm;