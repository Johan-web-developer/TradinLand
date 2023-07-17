const getTrader = (req,res)=>{
    res.json({
        "message": "Trader"
    })
};


const postTrader = (req,res)=>{
    res.json({
        "message": "hola"
    })
;}


const deleteTrader = (req,res)=>{
    res.json({
        "message": "xd"
    })
};


const patchTrader = (req,res)=>{
    res.json({
        "message": "patch"
    })
};

module.exports = {
    getTrader,
    postTrader,
    deleteTrader,
    patchTrader
}