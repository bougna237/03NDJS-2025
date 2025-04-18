const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMe, getUsers, deleteUser } = require('../controllers/userController');
// Dans routes/users.js
const admin = require('../middleware/admin');
router.get('/', auth, admin, getUsers); // Seuls les admins peuvent lister les utilisateurs

// GET /me
router.get('/me', auth, getMe);

// GET /users
router.get('/', auth, getUsers);

// DELETE /users/:id
router.delete('/:id', auth, deleteUser);

module.exports = router;
