const uidToUser = require('./app');

uidToUser(0)
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.error(err);
  });
