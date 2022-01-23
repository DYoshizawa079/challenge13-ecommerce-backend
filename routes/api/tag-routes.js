const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


  // find all tags
  // be sure to include its associated Product data
  router.get('/', (req, res) => {
    Tag.findAll({
      include: [
        { 
          model: Product,
          attributes: ['product_name'],
          through: ProductTag
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

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { 
        model: Product,
        attributes: ['product_name'],
        through: ProductTag
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

// create new tag
router.post('/', (req, res) => {

  /* req.body should look like this...
    {
      "tag_name": "Trendy"
    }
  */

Tag.create({
    tag_name: req.body.tag_name
  })
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update tag
router.put('/:id', (req, res) => {
  // update tag data
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((updatedTag) => res.json(updatedTag))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete one tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedTag => {
    if(!deletedTag) {
      res.status(404).json({message: 'No tag of that ID has been found.'});
      return
    }
    res.json(deletedTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
