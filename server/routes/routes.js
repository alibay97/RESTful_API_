const express = require('express');
const router = express.Router();


app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
const {
    getAllResources,
    getResourceById,
    createResource,
    updateResourceById,
    deleteResourceById
  } = require('../controllers/controller');

  router.get('/', getAllResources);
  router.get('/:id', getResourceById);
  router.post('/', createResource);
  router.put('/:id', updateResourceById);
  router.delete('/:id', deleteResourceById);
  
  module.exports = router;
