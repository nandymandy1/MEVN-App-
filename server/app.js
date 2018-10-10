const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Post Routes
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server Started on PORT " + port);
});
