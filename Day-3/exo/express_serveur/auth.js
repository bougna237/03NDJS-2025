import express from "express";
import{registre, login} from "../controller/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

expert default router;

