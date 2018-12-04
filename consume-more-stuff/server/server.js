const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;

const usersRouter = require('../server/routes/users');
const itemsRouter = require('../server/routes/items');

// const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
// const redis = require('connect-redis')(session);

// const saltRounds = 12;
// app.use(express.static('public'));

<<<<<<< HEAD

// app.use(bodyParser.urlencoded({ extended: true }))


=======
// app.use(bodyParser.urlencoded({ extended: true }))

>>>>>>> 24bfa6f441d4f35be58b30d6a83c880527d1bd45
// app.use(session({
//   store: new redis({
//       url: 'redis://redis-server:6379', logErrors:
//         true
//     }),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
//   }));
<<<<<<< HEAD
  
//   app.use(passport.initialize());
//   app.use(passport.session());
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   });
  
=======

//   app.use(passport.initialize());
//   app.use(passport.session());

//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   });

>>>>>>> 24bfa6f441d4f35be58b30d6a83c880527d1bd45
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

app.use('/users', usersRouter);
app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  console.log('smoke test');
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});


