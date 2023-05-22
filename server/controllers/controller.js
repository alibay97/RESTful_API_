


const getAllResources = (req, res) => {

  };
  

  const getResourceById = (req, res) => {
  
  };
  

  const createResource = (req, res) => {

  };
  

  const updateResourceById = (req, res) => {

  };
  

  const deleteResourceById = (req, res) => {

  };
  
  module.exports = {
    getAllResources,
    getResourceById,
    createResource,
    updateResourceById,
    deleteResourceById
  };

  res.status(200).json({ message: 'Operation successful' });

  catch (error) {
    res.status(500).json({ error: 'An internal server error occurred' });
  }
  
  if (!foundResource) {
    res.status(404).json({ error: 'Resource not found' });
  }
  