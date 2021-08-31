import React from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";


 const App = props => {

  return (
    <div className="App">
      <h1>
        Shopping List with React and Redux 
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}
const mapStatetoProps = state => { 
  return {
    bookList: state.bookList
  }
}
export default connect(mapStatetoProps)(App);