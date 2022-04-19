import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, image, description } = service;
    return (
        <div className='col'>
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price : {price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className='d-flex justify-content-center pb-2'>
                    <Link style={{ 'width': '150px' }} className='text-decoration-none border p-2 text-white bg-primary rounded-pill text-center' to='/checkout' >Avail this offer</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;