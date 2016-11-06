import {
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_FAILURE,
    GET_VACANCIES_SUCCESS,
    EDIT_VACANCY,
    ADD_VACANCY
} from '../constants/actionTypes';

export function getVacancies() {
    return (dispatch) => {
        dispatch({
            type: GET_VACANCIES_REQUEST
        })

        fetch('/vacancies.json')
            .then(function(resolve) {
                  return resolve.json();
            }, function(reject) {
                  dispatch({
                        type: GET_VACANCIES_FAILURE,
                        payload: reject.error,
                        error: true
                  })
            })
            .then(function(data) {
                  dispatch({
                      type: GET_VACANCIES_SUCCESS,
                      payload: data
                  })
            });
    }
}

export function saveChanges(data, vacancies, id) {
    return (dispatch) => {
        if (!vacancies[id]) {
            vacancies[id] = data;
            dispatch({
                type: ADD_VACANCY,
                payload: vacancies
            })
        } else {
            vacancies[id] = data;
            dispatch({
                type: EDIT_VACANCY,
                payload: vacancies
            })
        }
    }
}
