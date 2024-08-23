import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createShipment, updateShipment } from '../../shipmentActions';

const ShipmentForm = ({ selectedShipment, setSelectedShipment, onFormSubmit }) => {
    const [shipment, setShipment] = useState({
        cargoDescription: '',
        origin: '',
        destination: '',
        status: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedShipment) {
            setShipment(selectedShipment);
        }
    }, [selectedShipment]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipment((prevShipment) => ({
            ...prevShipment, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (shipment.id) {
            dispatch(updateShipment(shipment));
        } else {
            dispatch(createShipment(shipment));
        }
        setShipment({ cargoDescription: '', origin: '', destination: '', status: '' });
        setSelectedShipment(null);
        onFormSubmit(); // Call the callback to navigate back to the list
    };

    const handleBackToList = () => {
        onFormSubmit(); // Simply hide the form and show the list
    };

    return (
        <form className="shipment-form" onSubmit={handleSubmit}>
            <h2>{shipment.id ? 'Edit Shipment' : 'Add Shipment'}</h2>
            <div className="form-group">
                <label>Cargo Description</label>
                <input
                    type="text"
                    name="cargoDescription"
                    value={shipment.cargoDescription}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Origin</label>
                <input
                    type="text"
                    name="origin"
                    value={shipment.origin}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Destination</label>
                <input
                    type="text"
                    name="destination"
                    value={shipment.destination}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Status</label>
                <input
                    type="text"
                    name="status"
                    value={shipment.status}
                    onChange={handleChange}
                    required
                />
            </div>
             <div className="form-buttons">
                <button type="submit">{shipment.id ? 'Update Shipment' : 'Add Shipment'}</button>
                <button type="button" onClick={handleBackToList}>Back to List</button>
            </div>
        </form>
    );
};

export default ShipmentForm;
