import React,{Component} from "react";
import {  Card, CardImg,CardText, CardBody,
    CardTitle } from "reactstrap";
//function component render ra thông tin chi tiết món ăn    
function RenderDish({dish}) {
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
// function component render ra comment của guest
function RenderComments({comments}) {
    if (comments != null) {
      const menu = comments.map((comment) => {
        let date = new Date(comment.date);
        return (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {date.toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'})}</p>
          </div>
        );
      });
      return menu;
    } else {
      return (
        <div></div>
      );
    }
}
// container component truyền props cho function component là RenderDish và Rendercomment và nhận props từ component container là Maincomponent
const DishDetail = (props) => {
    const dish = props.dish;

    if(dish !=null) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish}/>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={dish.comments}/>
                    </div>
                </div>

            </div>
        )
    } else{
        return(
            <div></div>
        )
    }
}        
  
export default DishDetail;