require("pretty-error").start();
const asyncHandler = require("express-async-handler");
// * @route GET /api/candidats
// @desc    Get All Candidat
// @access  Public
exports.getCandidats = asyncHandler(async (req, res, next) => {});

// * @route POST /api/candidats
// @desc    Create Candidats
// @access  Public
exports.createCandidat = asyncHandler(async (req, res, next) => {});

// * @route POST /api/candidats/seeds
// @desc    Seed Data
// @access  Public
exports.seedDatabase = asyncHandler(async (req, res, next) => {});
