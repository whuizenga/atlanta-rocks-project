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
        res.json(route);
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/wallSearch/:searchParam', (req, res) => {
    const searchParam = req.params.searchParam;
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

router.put('/comment', (req, res) => {
    const comment = req.body.comment;
    const userId = req.body.userId;
    const routeId = req.body.routeId;

    console.log(routeId);

    Route.findById(routeId).then((route) => {
        const newComment = {
            posterId: userId,
            comment: comment,
        }
        route.comments.push(newComment);
        console.log(route.comments);
        route.save();
        res.json(route);
    }).catch((err) => {
        console.log(err);
    })
})

router.put('/rate/:routeId', (req, res) => {
    const routeId = req.params.routeId;
    const newRating = req.body.newRating;
    const newRaterId = req.body.newRaterId;

    Route.findById(routeId).then((route) => {
        route.ratings.push({raterId: newRaterId, rating: newRating })
        route.save();
        res.send("rating saved");

    })
})

module.exports = router;