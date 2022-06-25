import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
    Button,
    Modal,
    Col,
    ModalHeader,
    ModalBody,
    Row,
    Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    handleSubmitComment(values) {
        alert('Result: ' + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <div className="container">
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Row >
                                <Col>
                                    <Label htmlFor="rating ">
                                        Rating
                                    </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Control.select
                                        model=".rating"
                                        id="rating"
                                        name="rating"
                                        className="form-control mb-1"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label htmlFor="author">Your Name</Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Full Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label htmlFor="comment">
                                        Comment
                                    </Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Control.textarea
                                    model=".comment"
                                    id='comment'
                                    name="commnent"
                                    rows="6"
                                    className="form-control"
                                    validators={{
                                        required,
                                    }}
                                />
                                <Errors
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </div>    
                   
                </Modal>
            </div>
        )
    }
}
export default CommentForm;