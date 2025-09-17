const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();
const authorizeRoles = require("../middlewares/roleMiddleware");

// only admin can access this route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// both admin and manager can access this route

router.get("/manager", verifyToken, authorizeRoles("admin", "manager" ), (req, res) => {
  res.json({ message: "Welcome Manager" });
});

// all three roles can access this route

router.get("/user",verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports = router;
