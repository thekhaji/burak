import express from "express";
const router = express.Router();
import memberController from "./controllers/member.contoroller";

/** MEMBER **/
router.post('/member/login', memberController.login);
router.post('/member/signup', memberController.signup);
router.get('/member/detail', memberController.verifyAuth);

/** PRODUCT **/

/** ORDER **/


export default router;