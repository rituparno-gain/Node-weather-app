var getUser = (id, callback) => {
  console.log('inside getUser');
  var user = {
    id,
    name : 'Ritu'
  };

  setTimeout(() => {
    console.log('calling getUser');
    callback(user);
  },3000);
};

console.log('calling getUser');
getUser(555,(userObj) => {
  console.log('inside callback');
  console.log(userObj);
});
