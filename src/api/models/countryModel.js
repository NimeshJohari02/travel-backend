// Create a mongoose schema that contains the following information:
// - countryName (String)
// - subContinent (String)

const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
    },
    reigon: {
        type: String,
        required: true,
    },
});
// add indexing to countryName and Subcontinent so that the search from db is faster
countrySchema.index({ countryName: 1, subContinent: 1 }, { unique: true });

// Create a mongoose model using the schema defined above
const Country = mongoose.model("Country", countrySchema);
// export the model
module.exports = Country;
