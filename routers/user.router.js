
const {Router} =require('express');
const { GetUsers, GetUsersById, PostUsers, PutUsers, DeleteUsers } = require('../controllers/user.controller');
const router = Router();



router.get('/',GetUsers)
router.get('/:id',GetUsersById)
router.post('/',PostUsers)
router.put('/',PutUsers)
router.delete('/',DeleteUsers)





module.exports=router;