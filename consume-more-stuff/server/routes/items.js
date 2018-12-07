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
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.post("/", (req, res) => {
  const {
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

  const parsedCat = parseInt(category_id);
  const parsedCond = parseInt(condition_id);
  const parsedStat = parseInt(status_id);

  if (title.length <= 3) {
    return res.json({ status: ERROR, message: "Invalid title" });
  } else if (description.length <= 10) {
    return res.json({ status: ERROR, message: "Invalid description" });
  }
  return new Item({
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
      return item.refresh({
        withRelated: ["user_id", "condition_id", "category_id", "itemStatus_id"]
      });
    })
    .then(item => {
      return res.json(item);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

router.get("/:id", (req, res) => {
  const itemId = req.params.id;

  return new Item({ id: itemId })
    .fetch({
      columns: [
        "category_id",
        "price",
        "description",
        "manufacturer",
        "condition_id",
        "dimensions",
        "notes",
        "status_id",
        "title"
      ],
      withRelated: ["category_id"]
    })
    .then(item => {
      if (!item) {
        res.status(500).json({ message: `Item #${itemId} not found.` });
      } else {
        return res.json(item);
      }
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    });
});

module.exports = router;
