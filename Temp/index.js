const express = require('express');
const path = require('path');
const asyncHandler = require('./utilities/asyncHandler');
const { sayHii } = require('./controllers/simple.controller');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", sayHii)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
