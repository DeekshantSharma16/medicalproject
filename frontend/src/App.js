import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import data from './data';
import Product from'./Components/Product';
 function App() {
  return (
   <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            mediproducts
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
       <Route path="/product/:id" component={ProductScreen} ></Route>
       <Route path="/" component={HomeScreen} exact></Route>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <Product key = {product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;



