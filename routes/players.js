const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.players.renderIndex);
router.get("/login", ctrl.players.renderLogin);
router.get("/newUser", ctrl.players.renderNewUser);
router.get("/profile/:index", ctrl.players.renderProfile);
router.get("/invalidLogin", ctrl.players.invalidLoginRender);

router.post("/newUser", ctrl.players.postUser);
router.post("/login", ctrl.players.login);

router.put("/:index", ctrl.players.putUser);
router.put("/:index/pokemon", ctrl.players.putUserPokemon);

router.delete("/:index", ctrl.players.deletePlayer);

module.exports = router;