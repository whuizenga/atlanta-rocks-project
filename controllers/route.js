const express = require('express');
const Route = require('../models/route');
const router = express.Router();

router.get('/', (req, res) => {
    Route.find().then((routes) => {
        res.json(routes);
    })
});

router.get('/wallSearch/:searchParam', (req, res) => {
    const searchParam = req.params.searchParam;
    console.log(searchParam);
    Route.find().then((routes) => {
        const matchingRoutes = routes.filter((route) => {
            return route.wall === searchParam;
        })
        res.json(matchingRoutes);
    }).catch((err) => {
        res.send("wall not found");
    })
});

module.exports = router;