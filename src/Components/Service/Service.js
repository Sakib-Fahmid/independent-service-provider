import React from 'react';

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
                    <div className="card-footer">
                        <button>Avail this offer</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;