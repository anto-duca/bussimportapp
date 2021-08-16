import React from 'react'
import { Icon, Button } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <Icon large>mood_bad</Icon>
            <p>El producto que buscabas no fue encontrado</p>
            <Button
                node="button"
                style={{
                marginRight: '5px'
                }}
                waves="light"
            >
                Volver al inicio
            </Button>
        </div>

        
    )
}

export default NotFound
