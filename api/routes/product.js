const { homeController } = require("../controllers/user");

const router = require("express").Router();

router.get("/", homeController);

module.exports = router;
