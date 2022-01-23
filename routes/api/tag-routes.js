const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll()
    .then(searchResults => {
      res.json(searchResults);
    }).catch(err => {
      // If an error is returned
      res.status(404).json({message: "Sorry. Nothing was found."});
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
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
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
