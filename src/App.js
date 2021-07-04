import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './css/style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido a Busimport'/>
    </div>
  );
}

export default App;
