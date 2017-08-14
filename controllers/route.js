const express = require('express');
const Route = require('../models/route');
const router = express.Router();

router.get('/', (req, res) => {
    Route.find().then((routes) => {
        res.json(routes);
    })
});

router.get('/:id', (req, res) => {
    Route.findById(req.params.id).then((route) => {
        console.log(route);
        res.json(route);
    }).catch((err) => {
        console.log(err);
    });
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
    });
});

router.get('/difficultySearch/:searchParam', (req, res) => {
    const searchParam = req.params.searchParam;
    console.log(searchParam);
    Route.find().then((routes) => {
        const matchingRoutes = routes.filter((route) => {
            return  (route.difficulty === searchParam) || 
                    (route.difficulty === searchParam+"+") ||
                    (route.difficulty === searchParam+"-");
        })
        res.json(matchingRoutes);
    }).catch((err) => {
        res.send("difficulty not found");
    })
});

module.exports = router;