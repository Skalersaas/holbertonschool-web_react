import notificationReducer from "../reducers/notificationReducer";
import {
	FETCH_NOTIFICATIONS_SUCCESS
} from "../actions/notificationActionTypes";
import {
	getNotifications,
	getUnreadNotifications,
	filterTypeSelected
} from "./notificationSelector";
import { Map } from "immutable";
import notificationsNormalizer from "../schema/notifications";

describe("notificationSelector", () => {
	let initData = [
		{ id: 1, type: "default", value: "New course available", isRead: false },
		{ id: 2, type: "urgent", value: "New resume available", isRead: false },
		{ id: 3, type: "urgent", html: { __html: 'HTML' }, isRead: false },
	];

	it(`Tests that getNotifications returns correct data`, () => {
		const normalizedData = notificationsNormalizer(initData);
		const state = Map({
			notifications: normalizedData.notifications,
			filter: ""
		})
		expect(getNotifications(state)).toEqual(normalizedData.notifications);
	});

	it(`Tests that filterTypeSelected returns correct data`, () => {
		const normalizedData = notificationsNormalizer(initData);
		const state = Map({
			notifications: normalizedData.notifications,
			filter: "urgent"
		});
		expect(filterTypeSelected(state)).toEqual("urgent");
	});

});
