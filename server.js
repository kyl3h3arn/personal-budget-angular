const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for frontend requests
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve budget data
app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Failed to load budget data" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
