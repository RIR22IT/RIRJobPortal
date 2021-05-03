const router = require("express").Router();
const Coporate = require("../models/Coporate");

//add coporate data
router.route("/add").post((req, res) => {

    const companyName = req.body.companyName;
    const establishedOn = req.body.establishedOn;
    const category = req.body.category;
    const corporateEmail = req.body.corporateEmail;
    const corporateAddress = req.body.corporateAddress;
    const corporatePassword = req.body.corporatePassword;

    const newCoporate = new Coporate({

        companyName,
        establishedOn,
        category,
        corporateEmail,
        corporateAddress,
        corporatePassword

    })

    newCoporate.save().then(()=>{
        res.json("Coporate Added...")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Coporate.find().then((coporates)=>{
        res.json(coporates)
    }).catch((err)=>{
        console.log(err)
    })

})

//update coporate data
router.route("/update/:id").put(async (req, res) => {

    let coporateID = req.params.id;
    const {companyName,establishedOn,category,corporateEmail,corporateAddress,corporatePassword} = req.body;

    const updateCoporate = {

        companyName,
        establishedOn,
        category,
        corporateEmail,
        corporateAddress,
        corporatePassword

    }

    const update = await Coporate.findByIdAndUpdate(coporateID, updateCoporate)
    .then(() => {
        res.status(200).send({status: "Coporate updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//delete coporate data
router.route("/delete/:id").delete(async(req, res) => {
    let coporateID = req.params.id;

    await Coporate.findByIdAndDelete(coporateID)
    .then(() => {
        res.status(200).send({status: "Coporate deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete coporate", error: err.message});
    })
})

//view coporate data
router.route("/get/:id").get(async (req, res) => {
    let coporateID = req.params.id;
    const user = await Coporate.findById(coporateID)
    .then((coporate) => {
        res.status(200).send({status: "Coporate fetched", coporate})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get coporate", error: err.message});
    })
})

module.exports = router;


