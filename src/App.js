import React from 'react';
import './css/style.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categories from './components/Categories';
import Cart from './components/Cart';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path = {'/'} component = {ItemListContainer}/>  
            <Route exact path = {'/categoria/:id'} component = {ItemListContainer}/>  
            <Route exact path = {'/item/:id'} component = {ItemDetailContainer}/> 
            <Route exact path={'/productos/categoria/:categoryID'} component={Categories}/> 
            <Route exact path={'/cart'} component={Cart}/> 
          </Switch>
        <Redirect to='/' />
      </BrowserRouter>
    </div>
  )
}

export default App;
