const express = require('express');
const app = express(); // We may have different applications in our project.

app.get('/', (req, res) => {  // Arguments are path and callback function
    res.send({hi: 'there'})
})

const PORT = process.env.PORT || 5000 // process.env.PORT => Use the port the machine gives to your app in production
app.listen(PORT)