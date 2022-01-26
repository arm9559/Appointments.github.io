import { useState } from "react";
import AppointmentsForm from "../Appointments/AppointmentForm";


export default function ContactForm(){
    // let createDate = new Date
    // createDate.getTime()
    // let getDate = document.querySelector(".date")
    // getDate.innerHTML = createDate

    const [website,setWebsite] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [date,setDate] = useState("")
    
    const addInput = () =>{
        let getWebsite = document.querySelector("#exampleInputWebsite1").value
        let getEmail = document.querySelector("#exampleInputEmail1").value
        let getPhone = document.querySelector("#exampleInputPhone1").value

        if(getWebsite == "" && getEmail == "" && getPhone == ""){
            alert("Please Fill Inputs")
        }
        
        let getDate = new Date
        setWebsite(getWebsite)
        setEmail(getEmail)
        setPhone(getPhone)
        setDate(getDate)
    }
    return(
        <>
            <form>
            <div class="form-group">
                <label for="exampleInputWebsite1">Website</label>
                <input type="text" class="form-control" id="exampleInputWebsite1" placeholder="Enter WebSite" required/>
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" required/>
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputPhone1">Phone</label>
                <input type="tel" class="form-control" id="exampleInputPhone1" placeholder="+ Phone" required/>
            </div>
            <br/>
            <button type="button" class="btn btn-primary" onClick={addInput}>Enter</button>
        </form>
        <AppointmentsForm website={website} email={email} phone={phone}/>
        </>
    )
}