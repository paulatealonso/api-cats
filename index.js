const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');

const adopted = require("./adopted.json");

app.use(cors())

app.get("/", (request, response) => {
    response.send({response: true, code: 200, adopted: adopted});
});

app.get("/:id", (request, response) => {
    const { id } = request.params;
    const results = adopted.filter(user => user.id === Number(id));
    response.status(200).send({response: true, adopted: results});
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});








