const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
// const redis = require('connect-redis')(session);

// const saltRounds = 12;
// app.use(express.static('public'));


// app.use(bodyParser.urlencoded({ extended: true }))


// app.use(session({
//   store: new redis({
//       url: 'redis://redis-server:6379', logErrors:
//         true
//     }),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
//   }));
  
//   app.use(passport.initialize());
//   app.use(passport.session());
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   });
  
//   passport.deserializeUser((userId, cb) => {
//     return new User()
//     .where({ id: userId })
//     .fetch()
//     .then(user => {
//       if (!user) {
//         cb(null);
//       }
//       cb(null, user.serialize());
//     });
//   })

  app.get('/', (req, res)=>{
    console.log('smoke test')
    res.send('smoke test')
  })

  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
  module.exports = app;