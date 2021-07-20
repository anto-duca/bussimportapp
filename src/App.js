import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import './css/style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path = {'/'} component = {ItemListContainer}/>  
            <Route exact path = {'/category/:id'} component = {ItemListContainer}/>  
            <Route exact path = {'/item/:id'} component = {ItemDetailContainer}/>  
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
