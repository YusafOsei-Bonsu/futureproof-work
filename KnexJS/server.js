const express = require('express');
const port = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

// Homepage
app.get('/', (req, res) => res.send('Welcome to the Mini Avengers Database!'));

// Show all heroes
app.get('/heroes', async (req, res) => {
    let allHeroes = await knex.select().from('Heroes');
    res.json(allHeroes);
});

// Show all villains
app.get('/villains', async (req, res) => {
    let allVillains = await knex.select().from('Villains');
    res.json(allVillains);
});

// get a specific hero
app.get('/hero/:id', async (req, res) => {
    let id = req.params.id;
    let hero = await knex('Heroes').select().where('id', id);
    // If the hero exists, display them. Otherwise, an error msg is presented.
    hero.length == 1 ? res.json(hero) : res.send("This hero doesn't exist.")
});

// get a specific villain
app.get('/villain/:id', async (req, res) => {
    let id = req.params.id;
    let villain = await knex("Villains").select().where("id", id);
    // If the villain exists, they'll be displayed. Otherwise, an error msg is presented.
    villain.length == 1 ? res.json(villain) : res.send("This villain doesn't exist.");
});

// Removes a hero from the db
app.get('/delHero/:id', async (req, res) => {
    let heroID = req.params.id;
    
    await knex('Heroes').where('id', heroID).del();

    res.redirect('/heroes');
});

// Removes a villain from the db
app.get('/delVillain/:id', async (req, res) => {
    let villainID = req.params.id;

    await knex('Villains').where('id', villainID).del();

    res.redirect('/villains');
})

// Inserts a new hero into the db
app.get('/newHero', async (req, res) => {
    let firstname=req.query.first;
    let lastname=req.query.last;
    let role=req.query.role;

    await knex("Heroes").insert({ 
        forename: firstname,
        surname: lastname,
        role: role
    });

    res.redirect('/heroes');
});

// Inserts a new hero into the db
app.get('/newVillain', async (req, res) => {
    let firstname=req.query.first;
    let lastname=req.query.last;
    let role=req.query.role;

    await knex("Villains").insert({ 
        forename: firstname,
        surname: lastname,
        role: role
    });

    res.redirect('/villains');
});

app.listen(port, () => console.log(`Listening on port ${port}`));