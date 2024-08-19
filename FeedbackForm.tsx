import React, { useState } from 'react';
import './feedback_form.css';

const FeedbackForm: React.FC = () => {
    const [suggestions, setReason] = useState('');
    const [rate_Website, setLike] = useState('');
    const [convenience, setBookingEase] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!rate_Website || !convenience) {
            setShowErrorMessage(true);
            setTimeout(() => setShowErrorMessage(false), 2000);
            return;
        }

        const feedback = { suggestions, rate_Website, convenience };

        try {
            const response = await fetch('http://localhost:8080/customers/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(feedback),
            });

            if (response.ok) {
                setShowSuccessMessage(true); // Show the success message
                setTimeout(() => setShowSuccessMessage(false), 2000); // Hide after 2 seconds
                setReason('');
                setLike('');
                setBookingEase('');
            } else {
                alert('Failed to submit feedback.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('There was an error submitting your feedback.');
        }
    };

    return (
        <div className="feedback-form-container">
            <header className="feedback-form-header">
                <h1>Customer Feedback Form</h1>
            </header>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="feedback-form-group">
                    <label htmlFor="reason">Do you have any suggestions on how we can improve our services?</label>
                    <textarea
                        id="reason"
                        name="reason"
                        rows={4}
                        value={suggestions}
                        onChange={(e) => setReason(e.target.value)}
                    ></textarea>
                </div>
                <div className="feedback-form-group">
                    <label>How did you like our website? <span>*</span></label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="like"
                                value="yes"
                                checked={rate_Website === 'yes'}
                                onChange={(e) => setLike(e.target.value)}
                                required
                            /> Liked it
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="like"
                                value="okay"
                                checked={rate_Website === 'okay'}
                                onChange={(e) => setLike(e.target.value)}
                            /> It's okay
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="like"
                                value="no"
                                checked={rate_Website === 'no'}
                                onChange={(e) => setLike(e.target.value)}
                            /> Disliked it
                        </label>
                    </div>
                </div>
                <div className="feedback-form-group">
                    <label>How would you rate the ease of booking a vehicle through our system?<span>*</span></label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="bookingEase"
                                value="easy"
                                checked={convenience === 'easy'}
                                onChange={(e) => setBookingEase(e.target.value)}
                            /> Easy
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="bookingEase"
                                value="neutral"
                                checked={convenience === 'neutral'}
                                onChange={(e) => setBookingEase(e.target.value)}
                            /> Neutral
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="bookingEase"
                                value="difficult"
                                checked={convenience === 'difficult'}
                                onChange={(e) => setBookingEase(e.target.value)}
                            /> Difficult
                        </label>
                    </div>
                </div>
                <div className="feedback-form-group">
                    <button type="submit">Send your Feedback</button>
                </div>
            </form>

            {showSuccessMessage && (
                <div className="success-message">
                    <p>Feedback Submitted Successfully!</p>
                </div>
            )}

            {showErrorMessage && (
                <div className="error-message">
                    <p>Please fill the form!</p>
                </div>
            )}
        </div>
    );
};

export default FeedbackForm;

