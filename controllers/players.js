const players = require("../players");

const Player = require("../models").Player;
const Team = require("../models").Team;
const Pokemon = require("../models").Pokemon;

const renderIndex = (req, res) => {
    res.render("players/index.ejs")
}

const renderLogin = (req, res) => {
    res.render("players/login.ejs")
};

const renderNewUser = (req,res) => {
    res.render("players/newUser.ejs")
};

const renderProfile = (req, res) => {
    Player.findByPk(req.params.index, {
        include: [
            {
                model: Team
            },
            {
                model: Pokemon
            }
    ]
    })
    .then(selectedPlayer => {
        Team.findAll()
        
        .then(allTeams => {
            Pokemon.findAll()
            .then(allPokemon => {
                res.render("players/profile.ejs", {
                    player: selectedPlayer,
                    teams: allTeams,
                    pokemon: allPokemon
                }) 
            })
             
        })
    })
};

const postUser = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => {
        res.redirect(`/players/profile/${newPlayer.id}`);
    })
    // players.push(req.body);
    
}

const putUser = (req, res) => {
    Player.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPlayer => {
        res.redirect(`/players/profile/${req.params.index}`);
    })
    // players[req.params.index] = req.body;    
}

const invalidLoginRender = (req,res) => {
    res.render('players/invalidLogin.ejs')
}
const login = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(player => {
        res.redirect(`/players/profile/${player.id}`);
    })
    .catch(err => {
        res.redirect('/players/invalidLogin');
        // alert("Invalid username/password. Please try again");
    })
    // for(let i = 1; i <= players.length; i++){
    //     if(players[i].username === req.body.username && players[i].password === req.body.password) {
    //         res.redirect(`/players/profile/${i}`)
    //     };
    // }
}

const deletePlayer = (req, res) => {
    Player.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect("/players");
    })
    // players.splice(req.params.index,1);
    
}

const putUserPokemon = (req,res) => {
    console.log(req.params)
    Player.findByPk(req.body.playerId)
    .then(foundPlayer => {
        Pokemon.findByPk(req.body.pokemonId)
        .then(foundPokemon => {
            foundPokemon.addPlayer(foundPlayer);
            res.redirect(`/players/profile/${req.params.index}`)
        })
    })
}
module.exports = {
    renderIndex,
    renderLogin,
    renderNewUser,
    renderProfile,
    postUser,
    putUser,
    login,
    deletePlayer,
    invalidLoginRender,
    putUserPokemon
};