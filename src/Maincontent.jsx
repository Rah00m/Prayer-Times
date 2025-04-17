import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Firstrow from './Firstrow';
import Prayers from './Prayers';
import Selection from './Selection';

export default function Maincontent() {
    const [city, setCity] = useState("Cairo"); // Cairo is the default city
    const [nameCity, setNameCity] = useState("القاهره"); 
    const [country,setcountry]=useState("EG");
    const [namecountry,setnamecountry]=useState("مصر");
    const[today,setToday]=useState("");
    // const [timer, setTimer] = useState(10);
    const [nextPrayeridx, setNextPrayeridx] = React.useState(0);
    const [remainingTime, setRemainingTime] = useState("");
    return (
        <>
        {/* timer={timer}   setTimer={setTimer}  */}
            <Firstrow nameCity={nameCity} today={today}  nextPrayeridx={nextPrayeridx} remainingTime={remainingTime}/>
            <Divider style={{ borderColor: 'black', opacity: '0.5', width: '100%', textAlign: 'center', margin: "10px auto" }} />
            <Prayers city={city} nameCity={nameCity}  country={country} namecountry={namecountry} setToday={setToday}  setNextPrayeridx={setNextPrayeridx} setRemainingTime={setRemainingTime} />
            <Selection type="country" setCountry={setcountry} setNameCountry={setnamecountry}/>
            <Selection type="city" selectedCountry={country} setCity={setCity} setNameCity={setNameCity}/>
        </>
    );
}
