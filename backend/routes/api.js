const express = require("express");
const authController = require("../controllers/authController");
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/appointments", authMiddleware, appointmentController.create);
router.get("/appointments", authMiddleware, appointmentController.getAll);

module.exports = router;
