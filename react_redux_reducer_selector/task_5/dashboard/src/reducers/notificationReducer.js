import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	NotificationTypeFilters,
	FETCH_NOTIFICATIONS_SUCCESS
} from "../actions/notificationActionTypes";
import { Map } from "immutable";
import {notificationsNormalizer} from "../schema/notifications";

export const initialState = {
	notifications: [],
	filter: ""
}

const notificationReducer = (state = Map(initialState), action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const normalizedData = notificationsNormalizer(action.data);
			Object.keys(normalizedData.entities.notifications).forEach((key) => {
				normalizedData.entities.notifications[key].isRead = false;
			});
			return state.merge(normalizedData);
		case MARK_AS_READ:
			return state.setIn(["entities", "notifications", action.index, "isRead"], true);
		case SET_TYPE_FILTER:
			return state.set("filter", action.filter);
		default:
			return state;
	}
};

export default notificationReducer;
