const getNotifications = (state) => state.get("notifications");
const getUnreadNotifications = (state) => {
	return state.get("notifications").filter((notification) => notification.get("isRead") === false);
}
const filterTypeSelected = (state) => state.get("filter");

export { getNotifications, getUnreadNotifications, filterTypeSelected };

