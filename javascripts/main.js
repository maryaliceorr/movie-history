const events = require('./events');
const apiKeys = require('./apiKeys');

apiKeys.retrieveKeys();
events.initializer();

// made initializer function because calling events twice from one file and want to keep code clean
