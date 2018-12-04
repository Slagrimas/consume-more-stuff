const express = require("express");
const router = express.Router();
const Item = require("../db/Models/Item");


router.get("/", (req, res) => {
  return Item.fetchAll({
    withRelated: ["user_id", "condition_id", "category_id", "itemStatus_id"]
  })
    .then(items => {
      return res.json(items);
    })
    .catch(err => {
      console.log("err in getting items", err);
      return res.status(400).send("An error has ocurred");
    });
});

router.post("/", (req, res) => {
  const {
    //id,
    price,
    description,
    manufacturer,
    dimensions,
    category_id,
    condition_id,
    notes,
    status_id,
    title
  } = req.body;

  console.log('items req body', req.body);

  //const parsedId = parseInt(id);
  const parsedCat = parseInt(category_id);
  const parsedCond = parseInt(condition_id);
  const parsedStat = parseInt(status_id);

  return new Item({
    //id: parsedId,
    price,
    description,
    manufacturer,
    dimensions,
    category_id: parsedCat,
    condition_id: parsedCond,
    status_id: parsedStat,
    notes,
    title
  })
    .save()
    .then(item => {
      console.log('items posting', item);
      return item.refresh({
        withRelated: ["user_id", "condition_id", "category_id", "itemStatus_id"]
      });
    })
    .then(item => {
      return res.json(item);
    })
    .catch(err => {
      return res.status(400).json({ message: err.message, code: err.code });
    });
});

module.exports = router;
