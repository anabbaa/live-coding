const mongoose = require("mongoose");
const employeesDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  add: String,//i can without options
  employeeAddedDate: { //to update
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("EmployeesData", employeesDataSchema);
// first option like a class in java second is our chema 
// work on old collection that we have
// module.exports = mongoose.model("EmployeesData",employeesDataSchema, "EmployeesData");
