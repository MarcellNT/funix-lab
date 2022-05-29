import React, { Component } from 'react';
import './App.css';
// import component tu thu vien reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
// la mot trong nhung thu vien trong he sinh thai cua react
class App extends Component {
// tao ra mot class component App tu Component cua react 
  render() {
    return (
      // bat buoc phai co mot div hoac React.Fragment bao cac phan tu ben trong
      <div className="App">
        {/* Navbar va NavbarBrand tuong tu voi navbar, navbarbrand trong bootstrap, su dung ngan gon hon trong bootstrap */}
        <Navbar dark color="primary">
          <div className='container'>
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}
// phai xuat Component ra thi moi co the import de su dung duoc Component do 
export default App;