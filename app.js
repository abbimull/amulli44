const express = require('express');
const path = require('path');
const app = express();
const port = 3000; //Help define which port the server will run on
//Set up the middleware to interact with my static files
app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Allows for nesting objects in URL-encoded data if it is needed
app.use(express.urlencoded({ extended: true })); 

// Give a route for the main page
app.get('/', (req, res) => {
    // Send a HTML file in response from a GET request
    res.sendFile(__dirname + '/contact.html'); 
});

// POST route so it can handle the forms submissions
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body; 
    // Help log any form data within the server console that is needed for debugging
    console.log(`Form Submission:\nName: ${name}\nEmail: ${email}`);
    // The response that is sent back to the client
    res.send(`Thank you for your form submission. It has been received successfully!`);
});

// Listens on the specified port and also starts the server
app.listen(port, () => {
    // When the server starts successfully, it logs a message
    console.log(`Server running on http://localhost:${port}`);
});