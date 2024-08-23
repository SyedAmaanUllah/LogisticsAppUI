import {
    FETCH_SHIPMENTS_REQUEST,
    FETCH_SHIPMENTS_SUCCESS,
    FETCH_SHIPMENTS_FAILURE,
    CREATE_SHIPMENT_SUCCESS,
    UPDATE_SHIPMENT_SUCCESS,
    DELETE_SHIPMENT_SUCCESS
} from '../../shipmentActions';

const initialState = {
    loading: false,
    shipments: [],
    error: ''
};

export const shipmentReducer = (state=initialState,action) => {
    switch (action.type) {
        case FETCH_SHIPMENTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_SHIPMENTS_SUCCESS:
            return { ...state, loading: false, shipments: action.payload };
        case FETCH_SHIPMENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_SHIPMENT_SUCCESS:
            return { ...state, shipments: [...state.shipments, action.payload] };
        case UPDATE_SHIPMENT_SUCCESS:
            return {
                ...state,
                shipments: state.shipments.map((shipment) =>
                    shipment.id === action.payload.id ? action.payload : shipment
                )
            };
        case DELETE_SHIPMENT_SUCCESS:
            return {
                ...state,
                shipments: state.shipments.filter((shipment) => shipment.id !== action.payload)
            };
        default:
            return state;
    }
}