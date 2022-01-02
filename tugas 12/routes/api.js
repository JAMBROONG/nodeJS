const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController.js");

router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

// router.put("/students/:id", StudentController.update);

// router.delete("/students/:id", StudentController.destroy);



module.exports = router;