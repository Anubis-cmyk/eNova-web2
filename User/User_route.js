const express = require("express");
const router = express.Router();

const {getUsers,addUser,updateUser,deleteUser,login} = require('./User_controller');

router.route('/getUsers').get(getUsers);
router.route('/addUser').post(addUser);
router.route('/updateUser').patch(updateUser);
router.route('/deleteUser/:id').get(deleteUser);
router.route('/login').post(login);

module.exports = router;