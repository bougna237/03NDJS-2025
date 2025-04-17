const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMe, getUsers, deleteUser } = require('../controllers/userController');

// GET /me
router.get('/me', auth, getMe);

// GET /users
router.get('/', auth, getUsers);

// DELETE /users/:id
router.delete('/:id', auth, deleteUser);

module.exports = router;
