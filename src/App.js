import React from 'react';
import './css/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CustomProvider from './context/CustomProvider';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='container'>
      <CustomProvider>
        <BrowserRouter>
          <NavBar/>
            <Switch>
              <Route exact path = {'/'} component = {ItemListContainer}/>  
              <Route exact path = {'/categoria/:categoryID'} component = {ItemListContainer}/>  
              <Route exact path = {'/item/:id'} component = {ItemDetailContainer}/> 
              <Route exact path = {'/cart'} component = {Cart}/> 
              <Route exact path = {'/checkout'} component = {Checkout}/> 
              <Route exact path = {'*'} component = {NotFound} />
            </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  )
}

export default App;
