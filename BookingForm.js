import React, { useState } from 'react';
import './bookingForm.css';


const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday'
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Code to handle form submission
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleInputChange} />
      <label  htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleInputChange}>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Anniversary">Else</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
