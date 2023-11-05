const express = require("express")
const auth = require("../middlewares/auth.middleware")
const showProperty = require("../controllers/property/showMySellProperties")
const createProperty = require("../controllers/property/createProperty")
const deleteProperty = require("../controllers/property/deleteProperty")
const updateProperty = require("../controllers/property/updateProperty")
const bookProperty = require("../controllers/property/bookProperty")
const showRentProperties = require("../controllers/property/showRentProperties")
const showSellProperties = require("../controllers/property/showSellProperties")
const showMySellProperty = require("../controllers/property/showMySellProperties")
const propertyRoute = express.Router()

propertyRoute.get("/rent", showRentProperties)
propertyRoute.get("/buy", showSellProperties)
propertyRoute.use(auth)
propertyRoute.get("/bought", showMySellProperty)
propertyRoute.get("/rented", showRentProperties)
propertyRoute.post("/add", createProperty)
propertyRoute.delete("/delete/:_id", deleteProperty)
propertyRoute.patch("/update/:_id", updateProperty)
propertyRoute.patch("/book/:_id", bookProperty)

module.exports = propertyRoute
