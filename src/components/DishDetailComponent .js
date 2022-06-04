import React,{Component} from "react";
import {  Card, CardImg,CardText, CardBody,
    CardTitle } from "reactstrap";
class DishDetail extends Component {
    
    // sử dụng hàm map để duyệt qua comment lấy phần tử bên trong
    renderComment(dish){
       if(dish.comments !=null) {
            const menu = dish.comments.map((comment) => {
                // gan date lay gia tri date
                let date = new Date(comment.date);
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        {/* Chuyen thanh chuoi date thanh chuoi  */}
                        <p>--{comment.author}, {date.toLocaleDateString('en-US' ,{year:'numeric', month:'long', day:'numeric'})}</p>
                    </div>
                );
            });
            return menu;
       } else {
           return(
               <div></div>
           )
       }
          
    }

    render() {
        const dish = this.props.dish;
        if(dish !=null) {
            return (
                // render ra giao dien
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1 "> 
                            <h4>comment</h4>
                            {this.renderComment(dish)}
                        </div>
                    </div>
                </div>              
            )
        } else {
            return (
                <div></div>
            )
        }          
    }
}
export default DishDetail;