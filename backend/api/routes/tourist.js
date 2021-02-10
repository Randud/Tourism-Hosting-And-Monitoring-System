const expess = require('express');
const router = expess.Router();
const mongoose = require('mongoose');

const Tourist = require('../models/touristModel');

//endpoint for add tourist
router.post('/create', (req, res, next) => {

    const tourist = new Tourist({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        passportId: req.body.passportId,
        location: req.body.location,
        phone: req.body.phone,
        note: req.body.note
    });

    tourist.save()
        .then(results => {
            console.log(results);
            res.status(201).json({
                message: 'Tourist added succesfully!',
                createdEvent: tourist
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


//endpoint for get all tourist
router.get('/getAll', (req, res, next) => {
    Tourist.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            console.log(err);
            res.status(500).json({ error: err })
        });

});

//endpoint for get tourist by id
router.get('/get/:touristId', (req, res, next) => {
    const id = req.params.touristId;
    Tourist.findById(id)
        .select('name email passportId location phone note _id')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({ message: 'No valid entry found !' });
            }

        })
        .catch(
            err => {
                console.log(err);
                res.status(200).json({ error: err });
            });


});

//endpoint for update tourist
router.route('/update/:touristId').put(async (req, res) => {
    let userId = req.params.touristId;
    const { name, email, passportId, location, phone, note } = req.body;

    const updateDetails = {
        name,
        email,
        passportId,
        location,
        phone,
        note

    }

    const update = await Tourist.findByIdAndUpdate(userId, updateDetails)
        .then(() => {
            res.status(200).send({ status: "Tourist Updated succesfully" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error" });
        })
})




//endpoint for delete tourist
router.delete('/delete/:touristId', (req, res, next) => {
    const id = req.params.touristId;
    Tourist.remove({ _id: id })
        .exec()
        .then(results => {
            res.status(200).json(results);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

module.exports = router;