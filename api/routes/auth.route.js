import express from "express";
import { logout, register, login } from "../controllers/auth.controllers";
const router = express.Router();

app.post("/register", register)

app.post("login", login)

app.post("logout", logout)
