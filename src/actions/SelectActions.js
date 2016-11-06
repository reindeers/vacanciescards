import {
  GET_NAMES_REQUEST,
  GET_NAMES_FAILURE,
  GET_NAMES_SUCCESS,
  CHANGE_SELECT_VALUE
} from '../constants/actionTypes';

export function getNames() {
    return (dispatch) => {
        dispatch({
          type: GET_NAMES_REQUEST
        })

        fetch('/users.json')
            .then(function(resolve) {
                return resolve.json();
            }, function(reject) {
                  dispatch({
                      type: GET_NAMES_FAILURE,
                      payload: reject.error,
                      error: true
                  })
             })
            .then(function(data) {
                dispatch({
                    type: GET_NAMES_SUCCESS,
                    payload: data
                })
            });
    }
}

export function changeSelectValue(v) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SELECT_VALUE,
            payload: v
        })
    }
}
