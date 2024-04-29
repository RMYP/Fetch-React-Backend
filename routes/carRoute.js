const router = require("express").Router()
const upload = require("../middlewares/uploader")
const Car = require("../controllers/carController")
const Authenticate = require("../middlewares/authenticate");

router.get("/", Car.getAllCar)
router.get("/:id", Car.getCarById)
router.delete("/:id", Car.deleteCar)
router.post("/",upload.array("images"), Car.createCar)
router.patch("/:id", upload.array("images"), Car.updateCar)

module.exports = router