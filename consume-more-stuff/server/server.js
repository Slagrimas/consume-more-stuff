const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const User = require("./db/Models/User")

const usersRouter = require("../server/routes/users");
const itemsRouter = require("../server/routes/items");
const categoriesRouter = require("../server/routes/categories");

const bodyParser = require("body-parser");
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
// const redis = require('connect-redis')(session);

// const saltRounds = 12;
// app.use(express.static('public'));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));


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

app.use("/api/users", usersRouter);
app.use("/api/items", itemsRouter);
app.use("/api/categories", categoriesRouter);

app.post(`/api/login`, (req, res) => {
  let ={username,password,id,status_id, name, item_id}=req.body
  return new User()
  .where({ username: username })
  .fetch({
    columns: ["username", "password","id", "status_id","name", "item_id"]
  })
  .then(data => {
    if (!data) {
      return res.status(401).json({ message: `Username or password incorrect` })
    } else {
      const user = data.toJSON();
      return res.send(user)
    }
  })
})

// app.get("/", (req, res) => {
//   console.log("smoke test");
//   res.send("smoke test");
//});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
