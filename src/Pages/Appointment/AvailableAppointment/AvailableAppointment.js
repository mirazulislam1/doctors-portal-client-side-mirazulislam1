import React from 'react';

const AvailableAppointment = ({ option, setTreatment }) => {
    const {name,price, slots} = option;
    return (
        <div className="card shadow-xl my-10">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces': 'space' } available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center mt-2">
                    <label
                    onClick={()=> setTreatment(option)} 
                    htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;