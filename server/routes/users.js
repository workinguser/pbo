const { Router } = require("express");
const { createUser } = require("../controllers/users");

const router = Router();

router.post("/new-user", createUser);

module.exports = router;
