import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='mt-32 p-10'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center'>
                <h4 className='text-xl font-semibold text-primary'>Contact Us</h4>
                <h2 className='text-white text-2xl'>Stay connected with us</h2>
            </div>
            <div className='text-center mt-8'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-4" />
            </div>
            <div className='text-center mt-4'>
            <textarea className="textarea textarea-bordered h-24 w-80" placeholder="Your message"></textarea>
            </div>
           <div className='text-center mt-6'>
           <button className="text-white btn btn-primary  bg-gradient-to-r from-primary to-secondary"><span className='capitalize'>Submit</span></button>
           </div>
        </section>
    );
};

export default Contact;