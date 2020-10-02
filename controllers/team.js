const players = require("./players")

const Player = require("../models").Player
const Team = require("../models").Team

const renderIndex = (req, res) => {
    Team.findAll()
    .then(teams => {
        res.render("team/index.ejs", {
            team: teams
        })
    })
    
}

const renderProfile = (req, res) => {
    Team.findByPk(req.params.index, {
        include: [{
            model: Player
        }]
    })
    .then(foundTeam => {
        res.render("team/profile.ejs", {
            team: foundTeam
        })
    })
    
}

const renderNewTeam = (req,res) => {
    res.render("team/newTeam.ejs")
}

const postTeam = (req, res) => {
    Team.create(req.body)
    .then(newTeam => {
        res.redirect(`/team/${newTeam.id}`);
    })
}

const putTeam = (req, res) => {
    Team.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedTeam => {
        res.redirect(`/team/${req.params.index}`)
    })
}

const deleteTeam = (req, res) => {
    Team.findByPk(req.params.index, {
        include: [
            {
                model: Player
            }
        ]
    })
    .then(foundTeam => {
        if(! foundTeam.Player) {
            Team.destroy({
                where: {id: req.params.index}
            })
            .then(() => {
                res.redirect("/team");
            });
        }
    })
    
}
module.exports = {
    renderIndex,
    renderProfile,
    renderNewTeam,
    postTeam,
    putTeam,
    deleteTeam
}