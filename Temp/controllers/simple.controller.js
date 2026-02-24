const ApiError = require("../utilities/ApiError");
const ApiResponse = require("../utilities/ApiResponse");
const asyncHandler = require("../utilities/asyncHandler");

const sayHii = asyncHandler(async (req, res) => {
    throw new ApiError(409, "Code Phat gaya",)
})

module.exports = { sayHii }