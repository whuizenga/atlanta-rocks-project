const express = require('express');
const Route = require('../models/route');
const router = express.Router();

router.get('/', (req, res) => {
    Route.find().then((routes) => {
        res.json(routes);
    })
});

router.get('/search/:searchParam', (req, res) => {

});

module.exports = router;