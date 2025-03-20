import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect } from 'react';
axios.get('https://api.aladhan.com/v1/timingsByCity?country=SA&city=Riyadh')
.then(response => console.log(response.data))
// استيراد صور الصلاة
import fajrImage from './PICs/الفجر.jpg';
import dhuhrImage from './PICs/الظهر.jpg';
import asrImage from './PICs/العصر.jpg';
import maghribImage from './PICs/المغرب.jpg';
import ishaImage from './PICs/العشاء.jpg';
import moment from 'moment';
import 'moment/dist/locale/ar-dz';
moment.locale('ar-dz');

//use effect >> use for side effects >> API req
//we can do notation in use effect or as a event handler like click event that prevent infinite loop 
export default function Prayers({city,setToday ,setTimer}) {
  const getTimings = React.useCallback(async () => { //async function to get the data from the API
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`);
    setTimigs(response.data.data.timings);    
  }); 
  useEffect(() => {
    getTimings(); //call the function to get the data from the API
    const t =moment();
    setToday(t.format("MMM Do YYYY | h:mm"));
  }, [getTimings ,setToday ]);//added getTimings as a dependency because when we select city that mean we called the function to get the data from the API
// array to prevent running the effect after every render (change in the state)  

  const [timigs, setTimigs] = React.useState({});
  
  
// مصفوفة تحتوي على بيانات الصلاة
const prayers = [
  { key: "Fajr",name: "الفجر" , image: fajrImage, time: timigs.Fajr },
  { key: "Dhuhr",name:"الظهر", image: dhuhrImage, time: timigs.Dhuhr },
  { key: "Asr",name: "العصر", image: asrImage, time:timigs.Asr },
  {key: "Sunset",name:"المغرب", image: maghribImage, time: timigs.Maghrib},
  { key: "Isha",name:"العشاء" ,image: ishaImage, time: timigs.Isha},
];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1}>
        {prayers.map((prayer, index) => (
          <Box key={index}>
            <Card sx={{ height:"30vw",width: '18vw', marginLeft: index === 0 ? '10px' : '0'}}>
              <CardActionArea>
                <CardMedia component="img" height="250" image={prayer.image} alt={prayer.name} />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {prayer.name}
                  </Typography>
                  <Typography variant="h2" color="text.secondary">
                      {prayer.time}
                      
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Stack>
    </div>
  );
}


