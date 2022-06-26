import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Col,
  ModalHeader,
  ModalBody,
  Row,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
//function component render ra thông tin chi tiết món ăn
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>

  );
}

//function component render ra comment của khách hàng
function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comment</h4>
        <ul className="list-comment">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                    year: 'numeric',
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            )
          })}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    }
    this.handleSubmitComment = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }


  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <div className="container">
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
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
// container component truyền props cho function component là RenderDish và Rendercomment và nhận props từ component cha là Maincomponent
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <RenderComments
                comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
