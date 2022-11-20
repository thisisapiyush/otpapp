var express = require("express");
const { builtinModules } = require("module");

var router = express.Router();
const config = require("./config")
const client = require("twilio")(config.accountSID, config.authToken)



router.get("/", function(req,res){
    res.render("index");
});

router.post("/confirm", function(req,res){
    var num = req.body.number;
    client 
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: `+61${num}`,
            channel: "sms"
        })
    res.render("confirm", {info: req.body});    
});


router.post("/result", function(req,res){
    var pass = req.body.otp;
    var contactnum = req.body.num;
    if (pass.length === 6){
        client
            .verify
            .services(config.serviceID)
            .verificationChecks
            .create({
                to: `+61${contactnum}`,
                code: pass
            })
            .then(data => {
                if (data.status === "approved"){
                    res.render("result", {info: req.body});
                }
            })
            
        }else{
            res.status(400).send({
            message: "Wrong phone number or code."})
        }
    })


module.exports = router;
 