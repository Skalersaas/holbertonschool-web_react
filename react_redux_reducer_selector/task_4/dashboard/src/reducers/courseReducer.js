import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

export const initialState = [];
const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			let newState = Array();
			action.data.forEach((course) => {
				newState.push({
					...course,
					isSelected: false,
				});
			});
			newState = coursesNormalizer(newState);
			return state.merge(newState);
		case SELECT_COURSE:
			return state.setIn([action.index, "isSelected"], true);
		case UNSELECT_COURSE:
			return state.setIn([action.index, "isSelected"], false);
		default:
			return state;
	}
};

export default courseReducer;
