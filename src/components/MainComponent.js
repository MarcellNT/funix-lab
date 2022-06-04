import React, {Component} from "react";
import { Navbar,NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent ";
import { DISHES } from "../shared/dishes";
// /Main component là container component nơi lưu trữ các state, sử dụng presentation component và truyền props cho presentaion Menu và DishDetail 
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null  
        };
    }
    
    onDishSelected(dishId) {
        this.setState({selectedDish: dishId})
    }
   
    render() {
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/* Truyền props cho component Menu */}
                {/* Khi click và dish thì sẽ hiển thị thông tin chi tiết của dish đó và dish được lấy theo giá trị dishId */}   
                <Menu 
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelected(dishId)}
                />
                 {/* Truyền props cho component DishDetail */}
                 {/* Chỉ hiển thị đúng món ăn có dishid tương ứng với state là selectedDish được chọn */}
                <DishDetail 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                />
            </div>
        )
    }
}   

export default Main;
