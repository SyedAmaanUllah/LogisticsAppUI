import React, { useState } from 'react';
import ShipmentList from './Shipment/ShipmentList';
import ShipmentForm from './Shipment/ShipmentForm';

const ShipmentManager = () => {
    const [selectedShipment, setSelectedShipment] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleEdit = (shipment) => {
        setSelectedShipment(shipment);
        setShowForm(true); // Show the form when editing
    };

    const handleFormSubmit = () => {
        setShowForm(false); // Hide the form after submission
        setSelectedShipment(null); // Clear the selected shipment
    };

    const handleCreateShipment = () => {
        setSelectedShipment(null); // Clear any selected shipment
        setShowForm(true); // Show the form for creating a new shipment
    };

    return (
        <div>
            {showForm ? (
                <ShipmentForm
                    selectedShipment={selectedShipment}
                    setSelectedShipment={setSelectedShipment}
                    onFormSubmit={handleFormSubmit} // Pass the callback
                />
            ) : (
                <div>
                    <button onClick={handleCreateShipment}>Create Shipment</button>
                    <ShipmentList onEdit={handleEdit} />
                </div>
            )}
        </div>
    );
};

export default ShipmentManager;
