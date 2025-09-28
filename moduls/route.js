const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "template", "index.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "template", "login-win.html"));
});

// router.get("*", (req, res) => {
//     if (req.path === "/") {
//         res.sendFile(path.resolve(__dirname, "..", "template", "index.html"));    
//     }
//     else if (req.path === "/login") {
//         res.sendFile(path.resolve(__dirname, "..", "template", "login-win.html"));   
//     }
//     else {
//         res.sendFile(path.resolve(__dirname, "..", "template", "error.html"));
//     }
// });

module.exports = { router };