var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon.stellar.org');

server.accounts()
  .accountId("GBKVRXKFKW5W6OHIAHUEU5WJGMD7EE4DJ27QPPPXYFHJ3R4VFEMRYRRV")
  .call()
  .then(function (accountResult) {
    console.log(accountResult);
  })
  .catch(function (err) {
    console.error(err);
  })
