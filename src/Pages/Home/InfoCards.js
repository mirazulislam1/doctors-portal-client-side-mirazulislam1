import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './Home/InfoCard';

const InfoCards = () => {

        const cardData = [
            {
                id: 1,
                name: 'Opening Hours',
                description: 'Open 9.00 am to 4.00pm everyday',
                icon: clock,
                bg: 'bg-gradient-to-r from-primary to-secondary'
            },
            {
                id: 2,
                name: 'Visit Our locations',
                description: 'Brooklyn, NY 10036, United States',
                icon: marker,
                bg: 'bg-black'
            },
            {
                id: 3,
                name: 'Contact us now',
                description: '+8801735446510',
                icon: phone,
                bg: 'bg-gradient-to-r from-primary to-secondary'
            }
        ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
          {
            cardData.map(infoCard => <InfoCard key={infoCard.id} infoCard={infoCard}></InfoCard>)
          }  
        </div>
    );
};

export default InfoCards;