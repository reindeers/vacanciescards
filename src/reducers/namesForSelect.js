import * as actionTypes from '../constants/actionTypes';

const initialState = {
    names: [],
    fetching: false,
    isGetNames: false,
    selectUserName: 0
}

export default function namesForSelect(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_NAMES_REQUEST:
            return {
                ...state,
                fetching: true
            }

        case actionTypes.GET_NAMES_SUCCESS:
            return {
                ...state,
                names: action.payload,
                fetching: false,
                isGetNames: true
            }

        case actionTypes.CHANGE_SELECT_VALUE:
            return {
                ...state,
                selectUserName: action.payload
            }

        default:
            return state;
    }
}
