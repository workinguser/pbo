const { Schema, model } = require("mongoose");

const UserSchema = Schema({
   appleId: {
      type: String,
      required: true,
      unique: true,
   },

   pass: {
      type: String,
      required: true,
   },
});

module.exports = model("user", UserSchema);
