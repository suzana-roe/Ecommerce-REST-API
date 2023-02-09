const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:user_id", controller.getUserById);
router.delete("/:user_id;", controller.removeUser)

module.exports = router;