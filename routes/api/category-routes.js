const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Get all Categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll()
    .then(searchResults => {
      res.json(searchResults);
    }).catch(err => {
      // If an error is returned
      res.status(404).json({message: "Sorry. Nothing was found."});
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(searchResults => {
      res.json(searchResults);
    }).catch(err => {
      // If an error is returned
      res.status(404).json({message: "Sorry. Nothing was found."});
    });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
