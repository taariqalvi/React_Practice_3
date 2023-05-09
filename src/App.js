import './App.css';
import React from 'react';
import Home from './Home';
import Cart from './Cart';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Provider>
    </React.Fragment>
  );
}

export default App;
