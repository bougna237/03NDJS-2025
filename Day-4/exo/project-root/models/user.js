// In-memory storage
let users = [];
let idCounter = 1;

module.exports = {
    create(email, password) {
        const user = { id: idCounter++, email, password };
        users.push(user);
        return user;
    },
    
    findByEmail(email) {
        return users.find(user => user.email === email);
    },
    create(email, password, isAdmin = false) {
  if (this.findByEmail(email)) throw new Error("Email déjà utilisé");
  // ... reste du code
    const user = {id: idCounter++, email, password, isAdmin};
}
    
    findById(id) {
        return users.find(user => user.id === id);
    },
    
    findAll() {
        return [...users];
    },
    
    delete(id) {
        users = users.filter(user => user.id !== id);
    }
};
