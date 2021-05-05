import React,{useState} from "react";

export default function RegisterUI(){

    return(

    <div className = "container" style = {{width:"800px"}}>
    <div className = "w-100 mx-auto shadow p-5"><br/><br/><br/>
    
        <a href = "PersonReg"><button type="button" class="btn btn-primary btn-lg" style = {{width:"700px", height:"100px", left: "50px;"}}>Personal Register</button><br/><br/></a>
        <a href = "Reg"><button type="button" class="btn btn-secondary btn-lg" style = {{width:"700px", height:"100px"}}>Coporate Register</button></a>

    </div>
    </div>
    )

}

