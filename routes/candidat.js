require("pretty-error").start();
const express = require("express");
const router = express.Router();
const candidatController = require("../controllers/candidat");

// router.get("/api/candidats", candidatController.getCandidats);
// router.post("/api/candidats", candidatController.createCandidat);
// router.delete("/api/candidats", candidatController.bulkDelete);

// router.post("/api/candidats/seed", candidatController.seedDatabase);

module.exports = router;
