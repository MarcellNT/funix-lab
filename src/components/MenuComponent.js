import React, { Component } from "react";
import {  Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent ";
class Menu extends Component {
    // Luu state va truyen props
    constructor(props) {
        super(props);
        // luu lai state cua component
        this.state = {
            // tạo một props 
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({selectedDish: dish})
        //  Cập nhât state component
    }
    // renderDish(dish) {
    //     if(dish != null) {
    //         return (
    //             <div className="col-12 col-md-5 m-1">
    //                 <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //             </div> 
                
    //         );
    //     }
    //     // khi click selectedDish null thì sẽ trả về div rỗng và không render gì trên browser
    //     else {
    //         return (
    //             <div></div>
    //         ) ;       
    //     }
    // }
    render() {
        // Su dung ham map de duyet qua state   
        const menu = this.props.dishes.map((dish) => {
            return ( 
                // key phai co gia tri la duy nhat
                
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card  
                        // khi click vào bất kỳ một dishes nào sẽ hiện thông tin 
                        onClick={() => this.onDishSelect(dish)}
                        > 
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>                           
                </div>
            )
        })
        return (   
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {/* gọi renderDish function render dish  */}
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
                <div>
                    <DishDetail dish={this.state.selectedDish}/>
                </div>
            </div>
        )
    }

}   

export default Menu;