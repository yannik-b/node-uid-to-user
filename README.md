# node-uid-to-user

NPM module to convert an uid into an username

## Install

```shell
npm install uid-to-user
```

## Usage

```javascript
const uidToUser = require('./app');

uidToUser(0)
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.error(err);
  });
```
