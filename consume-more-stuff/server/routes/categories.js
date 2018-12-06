const express = require("express");
const router = express.Router();
const Category = require("../db/Models/Category");
const Item = require("../db/Models/Item");

router.get("/", (req, res) => {
  return Category.fetchAll()
    .then(cats => {
      res.json(cats);
    })
    .catch(err => console.error(err));
});

router.get("/home", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id", "condition_id", "itemStatus_id"] })
    .then(items => {
      const itemsObjs = items.toJSON();
      let autoArr = [];
      let clothArr = [];
      let elecArr = [];
      let genArr = [];
      let servArr = [];

      itemsObjs.forEach(element => {
        const catId = element.category_id;

        if (catId.id === 1 && autoArr.length <= 5) {
          autoArr.push(element);
        } else if (catId.id === 2 && clothArr.length <= 5) {
          clothArr.push(element);
        } else if (catId.id === 3 && elecArr.length <= 5) {
          elecArr.push(element);
        } else if (catId.id === 4 && genArr.length <= 5) {
          genArr.push(element);
        } else if (catId.id === 5 && servArr.length <= 5) {
          servArr.push(element);
        } else {
          return "error has occurred";
        }
      });
      return res.send({ autoArr, clothArr, elecArr, genArr, servArr });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error occurred`);
    });
});

router.get("/automotive", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id", "condition_id", "status_id"] })
    .then(items => {
      const results = items.toJSON();
      const automotive = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 1;
      });
      return res.send(automotive);
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error has occurred`);
    });
});

router.get("/clothing", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id"] })
    .then(items => {
      const results = items.toJSON();
      const clothing = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 2;
      });
      return res.send(clothing);
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error has occurred`);
    });
});

router.get("/electronics", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id"] })
    .then(items => {
      const results = items.toJSON();
      const electronics = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 3;
      });
      return res.send(electronics);
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error has occurred`);
    });
});

router.get("/general", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id"] })
    .then(items => {
      const results = items.toJSON();
      const general = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 4;
      });
      return res.send(general);
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error has occurred`);
    });
});

router.get("/services", (req, res) => {
  return Item.fetchAll({ withRelated: ["category_id"] })
    .then(items => {
      const results = items.toJSON();
      const services = results.filter(element => {
        const elemCatId = element.category_id;
        return elemCatId.id === 5;
      });
      return res.send(services);
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send(`An error has occurred`);
    });
});

module.exports = router;
