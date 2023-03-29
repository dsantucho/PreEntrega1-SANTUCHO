import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const ItemListContainer = (props) => {
    return (
        <div className='container p-3 mt-4' id='itemWelcomeContainer'>
            <div className='d-flex justify-content-center'>
                <h2>Welcome to Pixel Fashion</h2>
            </div>
            <div className='p-2'>
                <h3>{props.text}</h3>
            </div>

        </div>
    )
}

export default ItemListContainer;