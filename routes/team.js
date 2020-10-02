const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.team.renderIndex);
router.get("/newTeam", ctrl.team.renderNewTeam);
router.get("/:index", ctrl.team.renderProfile);

router.post("/newTeam", ctrl.team.postTeam);

router.put("/:index", ctrl.team.putTeam)

router.delete("/:index", ctrl.team.deleteTeam)

module.exports = router;