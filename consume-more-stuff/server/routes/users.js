const express = require('express');
const router = express.Router();


//const User = require('../db/Models/User');


router.get('/', (req, res) => {
  console.log('smoke test');
  res.send('smoke test');
});


// router.get('/', (req, res) => {
//   return User.fetchAll()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => console.error(err));
// });



module.exports = router;