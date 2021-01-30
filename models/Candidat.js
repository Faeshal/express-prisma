const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const CandidatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name required"],
  },
  job: String,
  address: String,
  phoneNumber: {
    type: String,
    required: [true, "User phone number required"],
  },
  image: String,
});

CandidatSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Candidat", CandidatSchema);
