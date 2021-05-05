import React,{useState} from "react";
import axios from "axios";

export default function CoporateRegister(){

    const [companyName, setcompanyName] = useState("");
    const [establishedOn, setestablishedOn] = useState("");
    const [category, setcategory] = useState("");
    const [corporateAddress, setcorporateAddress] = useState("");
    const [corporateEmail, setcorporateEmail] = useState("");
    const [corporatePassword, setcorporatePassword] = useState("");

    function sendRegData(e){
        e.preventDefault();

        const newCoporate = {
            companyName,
            establishedOn,
            category,
            corporateAddress,
            corporateEmail,
            corporatePassword
        }

        axios.post("http://localhost:8070/coporate/add", newCoporate).then(() => {
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

    <form action = "" class = "was-validated" onSubmit = {sendRegData}>
    <div className="form-group">
        <label for="companyName">Company Name*</label>
        <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name" required autoComplete = "off"
        onChange = {(e) => { 
            setcompanyName(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Company Name is required</div>
    </div>

    <div className="form-group">
        <label for="establishedOn">Established Date*</label>
        <input type="date" className="form-control" id="establishedOn" placeholder="Enter Date" required autoComplete = "off"
        onChange = {(e) => {
            setestablishedOn(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Established Date is required</div>
    </div>

    <div className = "form-group">
    <label for="category">Category*</label>
    <select class="form-control" required autoComplete = "off" onChange = {(e) => {
            setcategory(e.target.value);
    }}
    >
      <option value="category" disabled>Select Category</option>
      <option>Category 1</option>
      <option>Category 2</option>
      <option>Category 3</option>
      <option>Category 4</option>
      <option>Category 5</option>
    </select>
    <div class = "valid-feedback">Valid</div>
    <div class = "invalid-feedback">Category is required</div>
    </div>

    <div className="form-group">
    <label for="corporateAddress">Address*</label>
    <textarea className="form-control" id="corporateAddress" rows="2" required autoComplete = "off" placeholder="Enter Address" onChange = {(e) => {
            setcorporateAddress(e.target.value);
        }}
    >
    </textarea>
    <div class = "valid-feedback">Valid</div>
    <div class = "invalid-feedback">Company Address is required</div>
    </div>

    <div className="form-group">
        <label for="corporateEmail">Email address*</label>
        <input type="email" className="form-control" id="corporateEmail" aria-describedby="emailHelp" placeholder="Enter Email" required autoComplete = "off"
        onChange = {(e) => {
            setcorporateEmail(e.target.value);
        }}
        />
        <div class = "valid-feedback">Valid</div>
        <div class = "invalid-feedback">Email is required</div>
    </div>

    <div className="form-group">
        <label for="corporatePassword">Password*</label>
        <input type="password" className="form-control" id="corporatePassword" placeholder="Enter Password" required autoComplete = "off"
        onChange = {(e) => {
            setcorporatePassword(e.target.value);
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

