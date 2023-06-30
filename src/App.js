import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import ProductListing from './components/ProductListing.js';
import ProductDetail from './components/ProductDetail.js';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={ProductListing}/>
          <Route path='/product/:productId' exact Component={ProductDetail}/>
          <Route>Not Found</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
