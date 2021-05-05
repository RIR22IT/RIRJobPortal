const router = require("express").Router();
const Person = require("../models/Person");

//add person data
router.route("/add").post((req, res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    
    const newPerson = new Person({

        fname,
        lname,
        email,
        password

    })

    newPerson.save().then(()=>{
        res.json("Person Added...")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Person.find().then((persons)=>{
        res.json(persons)
    }).catch((err)=>{
        console.log(err)
    })

})

//update personal data
router.route("/update/:id").put(async (req, res) => {

    let personID = req.params.id;
    const {fname,lname,email,password} = req.body;

    const updatePerson = {

        fname,
        lname,
        email,
        password

    }

    const update = await Person.findByIdAndUpdate(personID, updatePerson)
    .then(() => {
        res.status(200).send({status: "Person updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//delete personal data
router.route("/delete/:id").delete(async(req, res) => {
    let personID = req.params.id;

    await Person.findByIdAndDelete(personID)
    .then(() => {
        res.status(200).send({status: "Person deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete person", error: err.message});
    })
})

//view personal data
router.route("/get/:id").get(async (req, res) => {
    let personID = req.params.id;
    const personUser = await Person.findById(personID)
    .then((person) => {
        res.status(200).send({status: "Person fetched", person})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get person", error: err.message});
    })
})

module.exports = router;


