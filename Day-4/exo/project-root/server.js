const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/register', authRoutes);
app.use('/login', authRoutes);
app.use('/me', userRoutes);
app.use('/users', userRoutes);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Ajoutez cette constante en haut de server.js
const JWT_SECRET = "votre_clé_secrète_complexe"; // À remplacer par une vraie clé en production
