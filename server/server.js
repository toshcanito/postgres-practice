require('dotenv').config({ path: './.env' });
const express = require('express');
const morgan = require('morgan');
const db = require('./db/postgres.js');

//Enviroment variables
const port = process.env.PORT;
const url = process.env.URL_ROOT;

//Express server
const app = express();

//Express middleware
app.use(morgan('tiny'));
app.use(express.json());

//Route handdlers
//Get all restaurants
app.get(url, async (req, res) => {
    try {
        const { rows } = await db.query('select * from restaurants order by id');
        return res.json({
            results: rows.length,
            data: rows
        });
    } catch (err) {
        console.log(err);
    }
});

//Get restaurant by ID
app.get(`${url}:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await db.query(`select * from restaurants where id= $1`, [id]);
        return res.json({
            data: rows[0]
        });
    } catch (err) {
        console.log(err);
    }
});
//Create restaurant
app.post(url, async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        if (!name || !location || !price_range) {
            res.status(400);
            return res.json({ error: 'Required parameter not provided' });
        }
        const { rows } = await db.query(`insert into restaurants (name, location, price_range) values ($1,$2,$3) returning *`,
            [name, location, price_range]);
        return res.json({
            data: rows[0]
        });
    } catch (err) {
        console.log(err);
    }
});
//Update a restaurant
app.put(`${url}:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, price_range } = req.body;
        if (!name || !location || !price_range) {
            res.status(400);
            return res.json({ error: 'Required parameter not provided' });
        }
        const { rows } = await db.query(`update restaurants set name =$1, location=$2, price_range=$3 where id=$4 returning *`,
            [name, location, price_range, id]);
        return res.json({
            data: rows[0]
        });
    } catch (err) {
        console.log(err);
    }
});
//Delete restaurant
app.delete(`${url}:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const { rowCount } = await db.query(`delete from restaurants where id=$1`, [id]);
        return res.json(rowCount);
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});