require("mongoose");

const tradingSchema = mongoose.Schema(
    {
    TipoDinero: {
        type:String,
        required : true,
        trim : true
    }
    },
    {
        timestamps : true,
    }
);

const Trading = mongoose.model("Trading",tradingSchema);

module.exports = Trading;

