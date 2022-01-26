import { useState } from "react";
import "./AppointmentsStyle.scss";

export default function AppointmentsForm(props){
    return(
        <div className="container text-center app-parent">
            <h1>Your Appointments In Today</h1>
            <div className="child">
                <span className="website"><b>Website:</b>&nbsp;{props.website}</span>
                <span className="email"><b>Email</b>&nbsp;{props.email}</span>
                <span className="phone"><b>Phone</b>&nbsp;{props.phone}</span>

                <span className="date">{props.date}</span>
            </div>
        </div>
    )
}