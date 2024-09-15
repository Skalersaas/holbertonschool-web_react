const jsonData = require('../../dist/notifications.json')
const schema = require('normalizr').schema;
const normalize = require('normalizr').normalize;


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);

export const notificationsNormalizer = (data) => {
    const normalizedData = normalize(data, [notification]);
    return normalizedData.entities.notifications;
};

export const getAllNotificationsByUser = (userId) => {

  const myList = [];
  jsonData.forEach((notification) => {
    if (notification.author.id === userId) {
      myList.push(notification.context);
    }
  })
  return myList;
}
