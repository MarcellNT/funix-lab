import React, { Component } from "react";
import {  Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class Menu extends Component {
    render() {
        const menu = this.props.dishes.map((dish) => {
            return ( 
                // Khi click vào card tên ảnh/tên món ăn thì trả ra chi tiết món ăn  
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card  
                        onClick={() => this.props.onClick(dish.id)}
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
                {/* div chứa menu gồm ảnh và tên món ăn */} 
                <div className="row">
                    {menu}
                </div>
            </div>     
        )
    }
}   

export default Menu;