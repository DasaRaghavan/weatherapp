var getUser = (id, callback) => {
  var userObj = {
    id: id,
    name: 'Vikram'
  }
  console.log(`1: ${Date()}`);
  setTimeout(() => {
    callback(userObj);
  }, 2000);

};

getUser(31, (userName) => {
  console.log(userName);
  console.log(`2: ${Date()}`);
});
