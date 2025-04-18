const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ error: "Token manquant" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user; // Stocke les infos utilisateur dans la requête
    next();
  } catch (err) {
    res.status(401).json({ error: "Token invalide" });
  }
};
