import React,{useState} from "react";
import axios from "axios";

export default function PersonRegister(){

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   
    function sendPersonRegData(e){
        e.preventDefault();

        const newPerson = {
            fname,
            lname,
            email,
            password
        }

        axios.post("http://localhost:8070/person/add", newPerson).then(() => {
            alert("Registered successfully...")

        }).catch((err) => {
            alert(err)
        })

    }
    
    return(

    <div className = "container" style = {{width:"800px"}}>
    <div className = "w-100 mx-auto shadow p-5">
    <div className = "card card-body" style = {{width:"600px"}}>
    <center><h2 class = "mt-1 bg-primary text-center text-white p-2 rounded shadow">Create Account</h2></center><br/>

    <form action = "" class = "was-validated" onSubmit = {sendPersonRegData}>
    <div className="form-group">
        <label for="fname">First Name*</label>
        <input type="text" className="form-control" id="fname" placeholder="Enter First Name" required autoComplete = "off"
        onChange = {(e) => { 
            setfname(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">First Name is required</div>
    </div>

    <div className="form-group">
        <label for="lname">Last Name*</label>
        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" required autoComplete = "off"
        onChange = {(e) => {
            setlname(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Last name is required</div>
    </div>

    <div className="form-group">
        <label for="email">Email address*</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" required autoComplete = "off"
        onChange = {(e) => {
            setemail(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Email is required</div>
    </div>

    <div className="form-group">
        <label for="password">Password*</label>
        <input type="password" className="form-control" id="password" placeholder="Enter Password" required autoComplete = "off"
        onChange = {(e) => {
            setpassword(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Password is required</div>
    </div>
    <div className="form-check">
        <input type="checkbox" className="form-check-input" required autoComplete = "off" id="exampleCheck1"/>
        <label className="form-check-label" for="Check1" style = {{color:"black"}}>Check me out</label>
        <div class = "invalid-feedback">Check this checkbox to continue</div>
    </div><br/>
    <button type="submit" className="btn btn-primary">SignUp</button>
    </form>
    </div>
    </div>
    </div>
    )


}

