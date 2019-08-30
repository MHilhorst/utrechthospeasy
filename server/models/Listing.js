const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  address: {
    type: String
  },
  city: {
    type: String
  },
  zip: {
    type: String
  },
  description: {
    type: String
  },
  userID: {
    type: String
  },
  hospiDate: {
    type: String
  },
  placingDate: {
    type: String
  },
  monthlyFee: {
    type: String
  },
  onderHuur: {
    type: Boolean
  },
  availableDate: {
    type: Date
  }
});

module.exports = mongoose.model("Listing", ListingSchema);
