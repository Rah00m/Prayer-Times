import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Firstrow from './Firstrow';
import Prayers from './Prayers';
import Selection from './Selection';

export default function Maincontent() {
    const [city, setCity] = useState("Riyadh"); 
    const [nameCity, setNameCity] = useState("الرياض"); 
    const[today,setToday]=useState("");
    const [timer, setTimer] = useState(10);
    return (
        <>
            <Firstrow nameCity={nameCity} today={today} timer={timer} />
            <Divider style={{ borderColor: 'black', opacity: '0.5', width: '100%', textAlign: 'center', margin: "10px auto" }} />
            <Prayers city={city} nameCity={nameCity} setToday={setToday} setTimer={setTimer} />
            <Selection setCity={setCity} setNameCity={setNameCity} />
        </>
    );
}
