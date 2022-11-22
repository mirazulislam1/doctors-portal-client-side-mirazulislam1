import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceCardData = [
        {
            id: 1,
            image: fluoride,
            title: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 1,
            image: cavity,
            title: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 1,
            image: fluoride,
            title: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-primary text-2xl'>Our Services</h1>
                <h2 className='mt-2 text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    serviceCardData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;