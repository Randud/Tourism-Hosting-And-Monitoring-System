const expess = require('express');
const router = expess.Router();
const mongoose = require('mongoose');

const HelpCenter = require('../models/helpCenterModel');

//endpoint for add HelpCenter
router.post('/create', (req, res, next) => {

    const helpCenter = new HelpCenter({
        _id: new mongoose.Types.ObjectId(),
        centerName: req.body.centerName,
        email: req.body.email,
        address: req.body.address,
        location: req.body.location,
        phone: req.body.phone,
    });

    helpCenter.save()
        .then(results => {
            console.log(results);
            res.status(201).json({
                message: 'Help Center added succesfully!',
                createdEvent: helpCenter
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});


//endpoint for get all HelpCenter
router.get('/getAll', (req, res, next) => {
    HelpCenter.find()
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

//endpoint for get HelpCenter by id
router.get('/get/:helpCenterId', (req, res, next) => {
    const id = req.params.helpCenterId;
    HelpCenter.findById(id)
        .select('centerName email address location phone _id')
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

//endpoint for update HelpCenter
router.route('/update/:helpCenterId').put(async (req, res) => {
    let userId = req.params.helpCenterId;
    const { centerName, email, address, location, phone } = req.body;

    const updateDetails = {
        centerName,
        email,
        address,
        location,
        phone
    }

    const update = await HelpCenter.findByIdAndUpdate(userId, updateDetails)
        .then(() => {
            res.status(200).send({ status: "HelpCenter Updated succesfully" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error" });
        })
})




//endpoint for delete HelpCenter
router.delete('/delete/:helpCenterId', (req, res, next) => {
    const id = req.params.helpCenterId;
    HelpCenter.remove({ _id: id })
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