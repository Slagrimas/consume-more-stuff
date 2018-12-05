const express = require("express");
const router = express.Router();
const User = require("../db/Models/User");

router.get("/", (req, res) => {
  return User.fetchAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.error(err));
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  if (req.user.id !== parseInt(userId)) {
    res.redirect("/login");
  }
  return new User()
    .where({ id: userId })
    .fetch({
      columns: ["id", "name", "username", "email", "item_id"],
      withRelated: ["itemUserId"]
    })
    .then(user => {
      if (!user) {
        res.status(404).json({ message: `User ${userId} not found.` });
      } else {
        const userObj = user.toJSON();
        res.send(userObj);
      }
    })
    .catch(err => console.error(err));
});

router.post("/", (req, res) => {
  let { name, username, email, password, status_id } = req.body;
  status_id = 1;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res.send(`You've entered an invalid email. Please enter the correct format, example: test@email.com`);
  }

  return new User({
    name: name,
    username: username,
    email: email,
    password: password,
    status_id: status_id
  })
    .save()
    .then(user => {
      console.log("this is a new user", user);
      return res.json(user);
    })
    .catch(err => {
      return res.status(400).json({ message: err.message, code: err.code });
    });
});

module.exports = router;
