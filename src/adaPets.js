// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
    .then((response) => {
      // console.log(response);
      setResult(response.data);
    })
    .catch((error) => {
      // console.log(error);
      setError(error.message);
    });
};


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    const singlePetURL = BASE_URL + selectedPetId.toString();
    
    axios.get(singlePetURL)
      .then((response) => {
        // console.log(response);
        setResult(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
};


const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    const singlePetURL = BASE_URL + selectedPetId.toString();
    
    axios.delete(singlePetURL)
      .then((response) => {
        // console.log(response);
        setResult(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setError(`Error for requesting to remove pet: ${error.message}`);
      });
  };

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
