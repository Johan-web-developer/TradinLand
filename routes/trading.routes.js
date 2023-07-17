const {Router} = require('express');
const {getTrader,postTrader,deleteTrader,patchTrader} = require('../controllers/trading.controller.js');


const router = Router();
router.get("/",getTrader);
router.post("/",postTrader);
router.patch("/",patchTrader);
router.delete("/",deleteTrader);

module.exports = router;