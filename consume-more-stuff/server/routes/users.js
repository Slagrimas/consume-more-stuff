const express = require("express");
const router = express.Router();
const User = require("../db/Models/User");

router.get("/", (req, res) => {
  return User.fetchAll()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  if (req.user.id !== parseInt(userId)) {
    return res.redirect("/login");
  }
  return new User()
    .where({ id: userId })
    .fetch({
      columns: ["id", "name", "username", "email", "item_id"],
      withRelated: ["itemUserId"]
    })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: `User ${userId} not found.` });
      } else {
        const userObj = user.toJSON();
        return res.send(userObj);
      }
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.post("/", (req, res) => {
  let { name, username, email, password, status_id } = req.body;
  status_id = 1;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return res.status(400).json({ message: err.message, code: err.code });
  } else if (name.length <= 2) {
    return res.status(400).json({ message: err.message, code: err.code });
  } else if (password.length <= 5) {
    return res.status(400).json({ message: err.message, code: err.code });
  } else if (username.length <= 3) {
    return res.status(400).json({ message: err.message, code: err.code });
  }

  return new User({
    name,
    username,
    email,
    password,
    status_id
  })
    .save()
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

module.exports = router;
