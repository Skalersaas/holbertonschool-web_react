import { SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER} from "../actions/notificationActionTypes";
import {
	  LOGIN,
	  LOGOUT,
	  LOGIN_SUCCESS,
	  LOGIN_FAILURE,
	  DISPLAY_NOTIFICATION_DRAWER,
	  HIDE_NOTIFICATION_DRAWER
} from "../actions/uiActionTypes";

export function uiReducer(state = appInitialState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: true
			};
		case HIDE_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: false
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isUserLoggedIn: true
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isUserLoggedIn: false
			};
		case LOGIN:
			return {
				...state,
				isUserLoggingIn: true
			};
		default:
			return state;
	}
}
