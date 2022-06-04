import React from "react";
import {  Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//function component RenderMenuItem nhận param là dish và onClick để render ra danh sách món ăn
    function RenderMenuItem({dish, onClick}) {
            return(
                <Card 
                    onClick={() => onClick(dish.id)}
                >
                    <CardImg
                        width="100%"
                        src ={dish.image}
                        alt ={dish.name}
                    />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>        
            )
    } 
// function component Menu nhận props từ container class component cha Main để render ra danh sách món ăn nhưng không render ra thông tin chi tiết món ăn nữa
// props nhận được ở đây là cả state dishes và function onClick    
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return(
                <div className="col-12 col-md-5 m-1">
                    <RenderMenuItem
                        dish = {dish}
                        onClick={props.onClick}
                    />
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }  
        
export default Menu;