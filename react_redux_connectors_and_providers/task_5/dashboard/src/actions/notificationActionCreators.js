import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';


// action creators with bound dispatch
export const markAsRead = (index) => (dispatch) => {
  dispatch({
    type: MARK_AS_READ,
    index
  });
};

export const setNotificationFilter = (filter) => (dispatch) => {
  dispatch({
    type: SET_TYPE_FILTER,
    filter
  });
}
export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading
  };
}

export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}

export function fetchNotifications() {
  return function(dispatch) {
    dispatch(setLoadingState(true));

    return fetch('http://localhost:8564/notifications.json')
        .then((data) => data.json())
        .then((data) => {
          dispatch(setNotifications(data));
        })
        .catch((err) => console.log(err))
        .finally(() => dispatch(setLoadingState(false)));
  };
}
