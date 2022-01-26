import { useState } from "react";
import Nav from "../Nav/Nav";
import ContactForm from "../Contacts/ContactForm";
import AppointmentsForm from '../Appointments/AppointmentForm';
import { Routes,Route,Link } from "react-router-dom";
import "./MainStyle.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

/*MUI*/
import Box from '@mui/material/Box';
export default function Main(){
    return(
        <div className="parent">
            <Nav/>
                <main className="container">
                    <Box>
                        <Routes>
                            <Route path="/Contacts" element={<ContactForm/>}></Route>
                            <Route path="/Appointments" element={<AppointmentsForm/>}></Route>
                        </Routes>
                    </Box>
                </main>
        </div>
    )  
}