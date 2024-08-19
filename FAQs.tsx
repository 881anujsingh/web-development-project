import React from 'react';
import './FAQs.css';

const FAQs: React.FC = () => {
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>Vehicle Rental System - FAQs</h1>
      </header>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <input type="checkbox" id="faq1" />
          <label htmlFor="faq1" className="faq-title">
            <h3>What is the minimum age to rent a vehicle?</h3>
            <span className="faq-icon">+</span>
          </label>
          <div className="faq-content">
            <p>The minimum age to rent a vehicle is 21 years. Drivers under 25 may be subject to additional fees.</p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq2" />
          <label htmlFor="faq2" className="faq-title">
            <h3>What documents do I need to rent a vehicle?</h3>
            <span className="faq-icon">+</span>
          </label>
          <div className="faq-content">
            <p>You need a valid driver's license, a credit card, and a form of identification such as a passport or ID card.</p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq4" />
          <label htmlFor="faq4" className="faq-title">
            <h3>What is the fuel policy?</h3>
            <span className="faq-icon">+</span>
          </label>
          <div className="faq-content">
            <p>Our vehicles are provided with a full tank of fuel. You need to return the vehicle with a full tank, or refueling charges will apply.</p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq5" />
          <label htmlFor="faq5" className="faq-title">
            <h3>Are there any mileage restrictions?</h3>
            <span className="faq-icon">+</span>
          </label>
          <div className="faq-content">
            <p>Some rental agreements may have mileage restrictions. Please check your rental agreement for details.</p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq6" />
          <label htmlFor="faq6" className="faq-title">
            <h3>What should I do if the vehicle breaks down?</h3>
            <span className="faq-icon">+</span>
          </label>
          <div className="faq-content">
            <p>In the event of a breakdown, contact our customer support immediately. We provide roadside assistance to help you get back on the road.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
