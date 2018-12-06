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
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials: true")
  next();
})


app.get("/", (req, res) => {
  console.log("smoke test");
  res.send("smoke test");
});

app.post(`/api/login/:username`, (req, res) => {
  console.log(req.body)
  let userUsername = req.params.username;
  let user = req.body;
  console.log('hello', user.username)
  if (user.username !== userUsername) {
    console.log('hello2', user.username)
    res.redirect("/register");
  }
  return new User()
    .where({ username: userUsername })
    .fetch({
      columns: ["username", "password"]
    })
    .then(data => {
      console.log('hello3', data)
      if (!data) {
        res.status(404).json({ message: `Username or password incorrect` })
      } else {
        const user = data.toJSON();
        console.log(user)
        
        res.send(user)
      }
    })
})




app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
