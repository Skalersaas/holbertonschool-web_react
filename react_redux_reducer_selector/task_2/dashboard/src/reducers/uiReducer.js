import uiReducer from './uiReducer';
import { SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER} from "../actions/notificationActionTypes";
import { Map} from "immutable";
import {
	  LOGIN,
	  LOGOUT,
	  LOGIN_SUCCESS,
	  LOGIN_FAILURE,
	  DISPLAY_NOTIFICATION_DRAWER,
	  HIDE_NOTIFICATION_DRAWER
} from "../actions/uiActionTypes";

export const initialState = {
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {},
};

export function uiReducer(state = Map(initialState), action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', true)
		case HIDE_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', false)
		case LOGIN_SUCCESS:
			return state.merge({
				isUserLoggedIn: true,
				user: action.payload.user
			})
		case LOGIN_FAILURE:
			return state.merge({
				isUserLoggedIn: false,
				user: action.payload.user
			})
		case LOGOUT:
			return state.merge({
				isUserLoggedIn: false,
			})
		default:
			return state;
	}
}
