const { v4: uuidv4 } = require('uuid');
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

const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: 'fakeAccessKey',
    secretAccessKey: 'fakeSecretKey'
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const db = new AWS.DynamoDB();

// const params = {
//     TableName: 'Supplier',
//     Item: {
//         "CompanyID": "LAST_ID",
//         "lastAssigned": 1
//     }
// };

// dynamoDB.put(params, (err, data) => {
//     if (err) {
//         console.error("Error initializing LAST_ID:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("LAST_ID initialized successfully:", JSON.stringify(data, null, 2));
//     }
// });

// const getLastID = async () => {
//     const params = {
//         TableName: "Supplier",
//         Key: {
//             "CompanyID": "LAST_ID" 
//         }
//     };
//     const result = await dynamoDB.get(params).promise();
//     return result.Item ? result.Item.value : 0;
// };

// async function getProjectionExpression(columnNames) {
//     const filteredColumnNames = columnNames.filter(name => name !== 'CompanyID');
//     const projectionExpression = filteredColumnNames.join(', ');


//     return projectionExpression;
// }

async function createTableIfNotExists(tableName) {
    const tableParams = {
        TableName: tableName,
        AttributeDefinitions: [
            {
                AttributeName: 'CompanyName',
                AttributeType: 'S'
            }
        ],
        KeySchema: [
            {
                AttributeName: 'CompanyName',
                KeyType: 'HASH'
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }
    };


    db.listTables((err, data) => {
        if (err) {
            console.error("Unable to list tables. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            if (!data.TableNames.includes(tableName)) {

                db.createTable(tableParams, (err, data) => {
                    if (err) {
                        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                    } else {
                        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                    }
                });
            } else {
                console.log(`Table ${tableName} already exists.`);
            }
        }
    });
}


createTableIfNotExists('Supplier');


app.get('/database', async (req, res) => {


    const tableName = "Supplier";
    // const projectionExpression = "CompanyName, NAICS Code(s), Contact Info, Number of Employees, Geographical Coverage Area, Diversity Council Affiliation, Timestamp, Annual Revenue";


    const scanParams = {
        TableName: tableName,
        // ProjectionExpression: projectionExpression
    };

    try {
        const retrievedData = await dynamoDB.scan(scanParams).promise();
        res.json({
            message: 'Successfully retrieved data from the database!',
            savedData: retrievedData.Items
        });
    } catch (err) {
        console.error("Error fetching data:", JSON.stringify(err, null, 2));
        res.status(500).json({ message: 'Failed to retrieve data from the database.' });
    }
});


// let columnNames = [];
app.post('/submit', async (req, res) => {
    const newId = uuidv4();
    const timestamp = new Date().toISOString();
    console.log(newId);
    console.log(timestamp);
    console.log('Data received from frontend:', req.body);
    // db.listTables({}, (err, data) => {
    //     if (err) {
    //         console.error("Error listing tables:", err);
    //     } else {
    //         console.log("Tables:", data.TableNames);
    //     }
    // });
    // Stretch goal: Send the data back in the response
    // res.json({
    //     message: 'You have successfully submitted the form!',
    //     formData: req.body
    // });

    // let lastID = await getLastID();

    req.body.CompanyName = req.body['Company Name'];
    delete req.body['Company Name'];

    const itemToPut = {
        CompanyID: newId,
        Timestamp: timestamp,
        ...req.body
    };

    // Delete unwanted key name
    delete itemToPut['Company Name'];

    const putParams = {
        TableName: "Supplier",
        Item: itemToPut
    };


    const getParams = {
        TableName: "Supplier",
        Key: {
            // Currently, "CompanyName" is the primary key. May use unique ID later.
            "CompanyName": req.body.CompanyName
        }
    };

    try {

        // const itemKeys = Object.keys(itemToPut);
        // columnNames = Array.from(new Set([...columnNames, ...itemKeys]));

        await dynamoDB.put(putParams).promise();
        const retrievedData = await dynamoDB.get(getParams).promise();
        res.json({
            message: 'You have successfully submitted the form and the data is successfully saved in the database!',
            savedData: retrievedData.Item
        });
    } catch (err) {
        console.error("Error saving data:", JSON.stringify(err, null, 2));
        res.status(500).json({ message: 'Failed to save data in the database.' });
    }


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



