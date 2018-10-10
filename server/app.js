const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Post Routes
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log("Server Started on PORT " + port);
});
