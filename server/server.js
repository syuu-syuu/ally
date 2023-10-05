const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const cors = require('cors');
app.use(cors());


// app.use('/user', express.static(path.join(__dirname, 'user')));


app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Respond to POST request on the root route (/)
// Used when users input data in the form page
// '/user/form'
app.post('/', (req, res) => {
    res.send('You have successfuly submitted the form!')
})

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
