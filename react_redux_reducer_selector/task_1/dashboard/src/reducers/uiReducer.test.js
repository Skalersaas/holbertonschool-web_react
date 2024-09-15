import {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";
import { Map } from "immutable";
import uiReducer, { initialState } from "./uiReducer";

describe("uiReducer", () => {
	it ("Tests that state returned by uiReducer equal initialState for default case", () => {
		const state = uiReducer(undefined, {});
		expect(state).toEqual(Map(initialState));
	});

	it("Tests that state returned by uiReducer equal initialState for SELECT_COURSE", () => {
		const state = uiReducer(undefined, { type: "SELECT_COURSE" });
		expect(state).toEqual(Map(initialState));
	});

	it ("Tests that action 'DISPLAY_NOTIFICATION_DRAWER' makes isNotificationDrawerVisible equal true", () => {
		const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
		expect(state.get('isNotificationDrawerVisible')).toEqual(true);
	});
});
