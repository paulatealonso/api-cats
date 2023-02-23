const express = require("express");
const app = express();
const cors = required('cors');
const PORT = 3000;

const cats = require("./cats.json");
const adopted = require("./adopted.json");

app.get("/cats", (request, response) => {
    response.send({response: true, code: 200, cats: cats});
});

app.get("/cats:id", (request, response) => {
    const { id } = request.params;
    const results = cats.filter(cat => cat.id === Number(id));
    response.status(200).send({response: true, cats: results});
});

app.get("/adopted", (request, response) => {
    response.send({response: true, code: 200, adopted: adopted});
});

app.get("/adopted:id", (request, response) => {
    const { id } = request.params;
    const results = adopted.filter(adopt => adopt.id === Number(id));
    response.status(200).send({response: true, adopted: results});
});

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});