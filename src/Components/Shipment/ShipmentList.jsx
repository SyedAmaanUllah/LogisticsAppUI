import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShipments, deleteShipment } from '../../shipmentActions';

const ShipmentList = ({ onEdit }) => {
    const dispatch = useDispatch();
    const { shipments, loading, error } = useSelector(state => state.shipments);

    useEffect(() => {
        dispatch(fetchShipments());
    }, [dispatch]);

    if (loading) return <p>Loading shipments...</p>;
    if (error) return <p className="error-message">Error: {error}</p>;

    return (
        <div className="shipment-container">
            <h2>Shipment List</h2>
            <table className="shipment-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cargo Description</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments.map((shipment) => (
                        <tr key={shipment.id}>
                            <td>{shipment.id}</td>
                            <td>{shipment.cargoDescription}</td>
                            <td>{shipment.origin}</td>
                            <td>{shipment.destination}</td>
                            <td>{shipment.status}</td>
                            <td>
                                <button className="edit-button" onClick={() => onEdit(shipment)}>Edit</button>
                                <button className="delete-button" onClick={() => dispatch(deleteShipment(shipment.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShipmentList;
