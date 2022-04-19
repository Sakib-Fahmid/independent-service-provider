import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Our Services</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    services.map(service => <Service
                        key={service.id} service={service}
                    >
                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;