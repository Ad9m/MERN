const studentController = require("../controllers/jokes.controller")

module.exports  = (app) => {
    app.get("/api/jokes", studentController.findAllStudents)
    app.post("/api/jokes", studentController.createStudent)
    app.get("/api/jokes/:id", studentController.findOne)
    app.post("/api/jokes/:id", studentController.updateStudent)
    app.delete("/api/jokes/:id", studentController.deleteStudent)
}