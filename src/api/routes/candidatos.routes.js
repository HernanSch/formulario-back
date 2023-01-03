const express = require("express");
const {getCandidatos, postCandidatos} = require("../controllers/candidatos.controllers");
const router = express.Router();

router.get("/get",getCandidatos)
router.post("/post",postCandidatos)

module.exports = router;