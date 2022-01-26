import { useState } from 'react';
import { Routes,Route,Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default function Nav(){
    return(
    <Box>
        <Link to="/Contacts">Contacts</Link>
        <Link to="/Appointments">Appointments</Link>
    </Box>
    )  
} 