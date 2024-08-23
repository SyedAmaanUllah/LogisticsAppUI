import axios from 'axios';

const API_BASE_URL = 'https://localhost:7120/api/Shipment';

export const FETCH_SHIPMENTS_REQUEST = 'FETCH_SHIPMENTS_REQUEST';
export const FETCH_SHIPMENTS_SUCCESS = 'FETCH_SHIPMENTS_SUCCESS';
export const FETCH_SHIPMENTS_FAILURE = 'FETCH_SHIPMENTS_FAILURE';

export const CREATE_SHIPMENT_SUCCESS = 'CREATE_SHIPMENT_SUCCESS';
export const UPDATE_SHIPMENT_SUCCESS = 'UPDATE_SHIPMENT_SUCCESS';
export const DELETE_SHIPMENT_SUCCESS = 'DELETE_SHIPMENT_SUCCESS';

// Fetch all shipments
export const fetchShipments = () => async (dispatch) => {
    dispatch({ type: FETCH_SHIPMENTS_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/GetShipments`);
        dispatch({ type: FETCH_SHIPMENTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_SHIPMENTS_FAILURE, payload: error.message });
    }
};

// Create a new shipment
export const createShipment = (shipment) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/CreateShipments`, shipment);
        dispatch({ type: CREATE_SHIPMENT_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error creating shipment:', error);
    }
};

// Update an existing shipment
export const updateShipment = (shipment) => async (dispatch) => {
    try {
        await axios.put(`${API_BASE_URL}/UpdateShipments/${shipment.id}`, shipment);
        dispatch({ type: UPDATE_SHIPMENT_SUCCESS, payload: shipment });
    } catch (error) {
        console.error('Error updating shipment:', error);
    }
};

// Delete a shipment
export const deleteShipment = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_BASE_URL}/DeleteShipments/${id}`);
        dispatch({ type: DELETE_SHIPMENT_SUCCESS, payload: id });
    } catch (error) {
        console.error('Error deleting shipment:', error);
    }
};
