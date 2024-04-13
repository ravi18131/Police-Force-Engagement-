const mongoose = require('mongoose');
const adminSchema = require('../models/adminSchema');
const admin = mongoose.model('admin', adminSchema);
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
        console.log(verifyUser._id);
        // const user = await User.findById({_id: verifyUser._id},{number:1, _id:0});
        // const user = await User.findById({_id: verifyUser._id});
        // if (user) {
        //     // console.log(user.number);
        //     console.log("Result : ", user);
        // } else {
        //     console.log("User not found");
        // }
        // console.log("Inside the auth file...");
        next();
    } catch (e) {
        res.status(401).send(`Internal Server Error ${e}`);
    }
}

module.exports = auth;