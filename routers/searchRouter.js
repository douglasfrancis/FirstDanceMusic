const router = require("express").Router();
const Service = require("../models/serviceModel");
const shuffle = require('lodash.shuffle');


router.get("/", async (req, res) => {

        await Service.find()
            .then(service => res.json(shuffle(service)))
            .catch(err => res.status(400).json('Error: ' + err));
   
});

module.exports = router;