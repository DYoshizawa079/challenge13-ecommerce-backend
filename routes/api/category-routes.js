const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Get all Categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      { 
        model: Product,
        attributes: ['id','product_name']
      }
    ]
  })
  .then(searchResult => {
    if (!searchResult) {
      res.status(404).json({ message: 'Nothing found' });
      return;
    }
    res.json(searchResult);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// find one category by its `id` value
// be sure to include its associated Products

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { 
        model: Product,
        attributes: ['id','product_name']
      }
    ]
  })
  .then(searchResult => {
    if (!searchResult) {
      res.status(404).json({ message: 'Nothing found' });
      return;
    }
    res.json(searchResult);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new category
router.post('/', (req, res) => {

  /* req.body should look like this...
    {
      "category_name": "Staionery"
    }
  */

Category.create({
  category_name: req.body.category_name
  })
  .then((category) => {
    res.status(200).json(category);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  // update category data
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((updatedCategory) => res.json(updatedCategory))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete one category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedCategory => {
    if(!deletedCategory) {
      res.status(404).json({message: 'No category of that ID has been found.'});
      return
    }
    res.json(deletedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
