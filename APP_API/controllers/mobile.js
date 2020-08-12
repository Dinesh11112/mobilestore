const mongoose = require('mongoose');
const { request } = require('express');
const mobile = mongoose.model('mobile');

const getMobiles = function(req, res){
    mobile
        .find().exec(function(err,mobileData){
        if(err){
            res 
                .status(404)
                .json(err);
            return;
        }
    res
        .status(200)
        .json(mobileData);
    });
};
const createMobile = function(req, res){
    mobile.create({
        name: req.body.name,
        type: req.body.type,
        latest: req.body.latest,
        cost:req.body.cost,
        rating: req.body.rating,
    }, (err,mobileData) =>{
        if(err){
            res 
                .status(400)
                .json(err);
        }else{
            res
                .status(201)
                .json(mobileData);
        }
    });
};
const getSingleMobile = function(req, res){
    mobile
        .findById(req.params.mobileid)
        .exec((err,mobileData) =>{
            if(!mobileData){
                return res
                    .status(404)
                    .json({
                        "message":"location not found"
                    });
            } else if(err){
                return res
                    .status(404)
                    .json(err);
            }
            res 
                .status(200)
                .json(mobileData);
        });
};
const updateMobile = function(req, res){
    if(!req.params.mobileid){
        res
            .status(404)
            .json({"message": "Not found, mobileid is required"});
        return;
    }
    mobile.findById(req.params.mobileid)
        .exec((err, mobileData)=>{
            if(!mobileData){
                res
                    .status(404)
                    .json({"message": "mobileid not found"});
                return;
            } else if(err){
                res 
                    .status(400)
                    .json(err);
                return;
            }
            mobileData.name = req.body.name;
            mobileData.type = req.body.type;
            mobileData.latest = req.body.latest;
            mobileData.cost = req.body.cost;
            mobileData.rating = req.body.rating;
            mobileData.img = req.body.img;
            mobileData.save((err, mobileData)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                }else{
                    res
                        .status(200)
                        .json(mobileData);
                }
            });
        });
};
const deleteMobile = function(req, res){
    mobile
        .findByIdAndRemove(req.params.mobileid)
        .exec((err,mobileData) =>{
            if(!mobileData){
                return res
                    .status(404)
                    .json({
                        "message":"data not found"
                    });
            } else if(err){
                return res
                    .status(404)
                    .json(err);
            }
            res 
                .status(200)
                .json(mobileData);
        });
};
module.exports = {
    getMobiles,
    createMobile,
    getSingleMobile,
    updateMobile,
    deleteMobile
};