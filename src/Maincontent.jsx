import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Firstrow from './Firstrow';
import Prayers from './Prayers';
import Selection from './Selection';

export default function Maincontent() {
    const [city, setCity] = useState("Riyadh"); 
    const [nameCity, setNameCity] = useState("الرياض"); 

    return (
        <>
            <Firstrow nameCity={nameCity} />
            <Divider style={{ borderColor: 'black', opacity: '0.5', width: '100%', textAlign: 'center', margin: "10px auto" }} />
            <Prayers city={city} nameCity={nameCity} />
            <Selection setCity={setCity} setNameCity={setNameCity} />
        </>
    );
}
