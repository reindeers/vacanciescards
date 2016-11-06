import * as actionTypes from '../constants/actionTypes';

const initialState = {
    vacancies: [],
    fetching: false,
    isGetVacancies: false
}

export default function vacancies(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_VACANCIES_REQUEST:
            return {
                ...state,
                fetching: true
            }

        case actionTypes.GET_VACANCIES_SUCCESS:
            return {
                ...state,
                vacancies: action.payload,
                fetching: false,
                isGetVacancies: true
            }

        case actionTypes.ADD_VACANCY:
            return {
                ...state,
                vacancies: action.payload
            }

        case actionTypes.EDIT_VACANCY:
            return {
                ...state,
                vacancies: action.payload
            }

        default:
            return state;
    }
}
