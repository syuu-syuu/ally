const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const cors = require('cors');
app.use(cors());


// app.use('/user', express.static(path.join(__dirname, 'user')));


app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.post('/submit', (req, res) => {
    console.log('Data received from frontend:', req.body);

    // Stretch goal: Send the data back in the response
    res.json({
        message: 'You have successfully submitted the form!',
        formData: req.body
    });
});

// Respond to a PUT request to the /user route
// Used when users want to modify the data they have input
// /user/profile
app.put('/', (req, res) => {
    res.send('Data updated!')
})

// Respond to a DELETE request to the / user route
// Used when users want to delete the data they have input
// /user/profile
app.delete('/', (req, res) => {
    res.send('Data deleted!')
})
