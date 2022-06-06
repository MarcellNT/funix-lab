import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent ";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from "./FooterComponent";
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


    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
