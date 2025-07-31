import React, { useState } from 'react'
import '../styles/form.css';
import RatingPicker from '../components/ratingPicker';

function Form() {
    const [formData, setFormData] = useState({
        email: '',
        address: '',
        overallRating: 0, // If the result is 0, a value has not been selected
        ratingTextDetails: '',
        maintenanceRating: '',
        cleanlinessRating: '',
        communicationRating: ''
    });

    const [detailsOpen, setDetailsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-body">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input required name="email" type="email" placeholder="Enter your email" maxLength="50" value={formData.email} onChange={handleChange}/>

                <label htmlFor="address">Address of Rental:</label>
                <input name="address" type="text" placeholder="Unit 5, 123 Main St, Suberb State 2000" value={formData.address} onChange={handleChange}/>

                <label htmlFor="overallRating">Overall Rating:</label>
                <RatingPicker
                    value={formData.overallRating}
                    onChange={val => setFormData(prev => ({ ...prev, overallRating: val }))}
                />
                <textarea name="ratingTextDetails" type="text" value={formData.ratingTextDetails} onChange={handleChange} 
                placeholder="Optional: Additional comments about your rating including image links." 
                maxLength="1000" 
                rows={5}
                style={{resize: 'none'}}
                />
                
                <div>
                    <button
                        type="button"
                        className="collapsibleButtonDetailedRatings"
                        onClick={() => setDetailsOpen(open => !open)}>Give us a Breakdown?
                    </button>
                    {detailsOpen && (
                        <div className="collapsibleContentDetailedRatings">
                            <label htmlFor="maintenanceRating">Maintenance Rating:</label>
                            <RatingPicker
                                value={formData.maintenanceRating}
                                onChange={val => setFormData(prev => ({ ...prev, maintenanceRating: val }))}
                            />

                            <label htmlFor="cleanlinessRating">Cleanliness Rating:</label>
                            <RatingPicker
                                value={formData.cleanlinessRating}
                                onChange={val => setFormData(prev => ({ ...prev, cleanlinessRating: val }))}
                            />

                            <label htmlFor="communicationRating">Communication Rating:</label>
                            <RatingPicker
                                value={formData.communicationRating}
                                onChange={val => setFormData(prev => ({ ...prev, communicationRating: val }))}
                            />
                        </div>
                    )}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;