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

    <div className = "container" style = {{width:"700px"}}><br/>

    <form onSubmit = {sendRegData}>
    <div className="form-group">
        <label for="companyName">Company Name*</label>
        <input type="text" className="form-control" id="companyName" placeholder="Enter Company Name"
        onChange = {(e) => { 
            setcompanyName(e.target.value);
        }}
        />
    </div>

    <div className="form-group">
        <label for="establishedOn">Established Date*</label>
        <input type="date" className="form-control" id="establishedOn" placeholder="Enter Date"
        onChange = {(e) => {
            setestablishedOn(e.target.value);
        }}
        />
    </div>

    <div className="form-group">
        <label for="category">Category*</label><br/>
        <select style={{ width: 670 , height: 40}} onChange = {(e) => {
            setcategory(e.target.value);
        }}
        >
            <option value="category" disabled>Select Category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
            <option>Category 4</option>
            <option>Category 5</option>
        )
        </select>
    </div>

    <div className="form-group">
    <label for="corporateAddress">Address*</label>
    <textarea className="form-control" id="corporateAddress" rows="2" placeholder="Enter Address" onChange = {(e) => {
            setcorporateAddress(e.target.value);
        }}
        >
    </textarea>
    </div>

    <div className="form-group">
        <label for="corporateEmail">Email address*</label>
        <input type="email" className="form-control" id="corporateEmail" aria-describedby="emailHelp" placeholder="Enter Email"
        onChange = {(e) => {
            setcorporateEmail(e.target.value);
        }}
        />
    </div>

    <div className="form-group">
        <label for="corporatePassword">Password*</label>
        <input type="password" className="form-control" id="corporatePassword" placeholder="Enter Password"
        onChange = {(e) => {
            setcorporatePassword(e.target.value);
        }}
        />
    </div>
    <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">SignUp</button>
    </form>

    </div>
    )

}