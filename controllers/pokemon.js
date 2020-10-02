const pokemon = require("../pokemon");

const Pokemon = require("../models").Pokemon;
const Player = require("../models").Player;

const index = (req, res) => {
    Pokemon.findAll()
    .then(allPokemon => {
        res.render("index.ejs", {
            pokemon: allPokemon
        });
    })
};

const newRender = (req, res) => {
    res.render("new.ejs");
};

const show = (req, res) => {
    Pokemon.findByPk(req.params.index, {
        include: [
            {
                model: Player
            }
            
        ]
    })
    .then(selectedPokemon => {
        res.render("show.ejs", {
            pokemon: selectedPokemon
        });
    })
};

const edit = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(editPokemon => {
        res.render("edit.ejs", {
            pokemon: editPokemon
        })
    })
    
}

const post = (req, res) => {
    Pokemon.create(req.body)
    .then(newPokemon => {
        res.redirect("/pokemon");
    })
    // pokemon.push(req.body);   
}

const put = (req, res) => {
    Pokemon.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPokemon => {
        res.redirect(`/pokemon/${req.params.index}`);

    })
    // pokemon[req.params.index] = req.body;

}

const deletePokemon = (req, res) => {
    Pokemon.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect("/pokemon");
    })
    // pokemon.splice(req.params.index, 1);
}

const sortRender = (req, res) => {
    Pokemon.findAll({
        where: {
            type: req.query.pokeType
        }
    })
    .then(sortedPokemon => {
        res.render("sorted.ejs", {
            pokemon: sortedPokemon
        })
    })
    // let pokemonSort = [];
    // for(let i = 0; i < pokemon.length; i++) {
    //     if(pokemon[i].type === req.query.pokeType) {
    //         pokemonSort.push(pokemon[i])
    //     }
    // }

}

module.exports = {
    index,
    newRender,
    show,
    edit,
    post,
    put,
    deletePokemon,
    sortRender
}