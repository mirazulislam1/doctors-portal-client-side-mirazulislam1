import React from 'react';

const InfoCard = ({infoCard}) => {
    const {name, description, icon, bg} = infoCard
    return (
        <div className={`card text-white card-side shadow-xl p-3 ${bg}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
              
            </div>
        </div>

    );
};

export default InfoCard;