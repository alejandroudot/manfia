import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import List from "../components/Grid";
import Category from "../components/Category";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../components/Cart";
import Contact from "../components/Contact";

function App() {
  return (
    <div className="App">
            <BrowserRouter>

      <Navbar />

        <Route exact path="/" render={() => <List />} />
        <Route path="/{:categoryID}" render={() => <Category />} />
        <Route path="/carrito" component={Cart} />
        <Route exact path="/contacto" render={() => <Contact />} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
