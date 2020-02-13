import { GET_EVENTS, ADD_EVENT, DELETE_EVENT, EVENTS_LOADING, ADD_EVENT_FAILED } from '../actions/types';


const initialState = {
    events: [],
    loading: false,
    isAdded: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false,
                isAdded: false
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event._id !== action.payload)

            }
        case ADD_EVENT:
            return {
                ...state,
                events: [action.payload, ...state.events],
                isAdded: true,
                loading: false
            }
        case EVENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_EVENT_FAILED:
            return {
                ...state,
                isAdded: false,
                loading: false
            }
        default:
            return state;
    }
}