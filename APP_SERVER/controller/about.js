
var request = require('request');
var apiOptions = {
    server : 'http://localhost:3000'
};

const {response} = require("../../app");

const _renderHomepage = function(req, res, responseBody){
    res.render('list-display',{
        mobiles: responseBody
    });
}
const homelist = function (req, res){
    const path = '/api/mobile';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,(err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );      
 };


 const _renderdetailpage = function(req, res, responseBody){
    res.render('mobile-info',{
        currentMobile: responseBody
    });
}
const mobileinfo = function (req, res){
    const path = `/api/mobile/${req.params.mobileid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request (
        requestOptions,
        (err, response, body) => {
            _renderdetailpage(req, res, body);
        }
    );
    }
    const _renderCreatePage = function (req, res) {

        res.render('Create-new-mobile', {
            title: "Create New mobile"
        });
     };
    
     const addNewMobile = function (req, res){
         _renderCreatePage(req, res);
     };
    
     const doAddNewMobile = function (req, res){
        const path = '/api/mobile/';
        const postdata ={
            name: req.body.name,
            type: req.body.type,
            latest: req.body.latest,
            cost: req.body.cost,
            rating: req.body.rating
        };
        const requestOptions = {
            url: apiOptions.server+path,
            method: 'POST',
            json: postdata
        };
        request(
            requestOptions,
             (err, response, body) => {
                if (response.statusCode === 201){
                    res.redirect('/');
                }
            }
        );
     };
    
     const _renderUpdatePage = function (req, res) {

        res.render('Updatemobile', {
            title: "Update mobile"
        });
     };
     const mobileUpdate = function (req, res){
        _renderUpdatePage(req,res);
        const path = `/api/mobile/${req.params.mobileid}`;
        const postdata ={
            name: req.body.name,
            type: req.body.type,
            latest: req.body.latest,
            cost: req.body.cost,
            rating: req.body.rating
        };
        const requestOptions = {
            url: apiOptions.server+path,
            method: 'PUT',
            json: postdata
        };
    }

    function AboutPage(req, res,next){
        res.render('about', { title: 'About Page'});
      }
     function TitlePag(req, res,next){
        res.render('index', { title: 'Express'});
      }
    module.exports = {
        homelist,AboutPage, _renderHomepage,_renderdetailpage,_renderUpdatePage,mobileUpdate, mobileinfo, addNewMobile,doAddNewMobile,TitlePag
        
    };
/*





function Display(req, res, next){
  res.render('display',{title: 'NOT IMPLEMENTED'});
}

module.exports = {TitlePag,AboutPage,Display}*/