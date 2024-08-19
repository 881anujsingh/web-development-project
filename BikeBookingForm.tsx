import React, { useState } from 'react';
import './BikeBookingForm.css';
import bikebooking from "./assets/crf.png";
import {Link} from "react-router-dom";

const BikeBookingForm: React.FC = () => {
    const [popupVisible, setPopupVisible] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="bikebookingform-body" style={{ background: `url(${bikebooking})no-repeat center center/cover` }}>
            <div className="bikebookingform-booking-form">
                <h2>Book Your Bike Today!</h2>
                <form id="bikeBookingForm" onSubmit={handleSubmit}>
                    <label htmlFor="pickup">Pickup</label>
                    <input type="datetime-local" id="pickup" name="pickup" />

                    <label htmlFor="dropoff">Drop off</label>
                    <input type="datetime-local" id="dropoff" name="dropoff" required />

                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required />

                    <div className="bikebookingform-policy">
                    <Link to='/contract'target="-blank"><h4>Before Booking Read Our Terms And Conditions</h4></Link>
                    </div>

                    <div className="bikebookingform-checkbox-container">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">I have read all terms & conditions</label>
                    </div>

                    <button type="submit" id="confirmBookingButton">CONFIRM BIKE BOOKING</button>
                </form>
            </div>

            {popupVisible && (
                <div id="popup" className="bikebookingform-popup">
                    <div className="bikebookingform-popup-content">
                        <span className="bikebookingform-close-btn" id="closePopup" onClick={handleClosePopup}>&times;</span>
                        <p>Booking Successful!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BikeBookingForm;















