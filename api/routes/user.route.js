const router = require('express').Router();
const {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} = require('../controllers/user.controller.js');


router.post('/signout', signout);

module.exports = router