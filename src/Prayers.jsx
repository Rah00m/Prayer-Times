import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
axios
  .get("https://api.aladhan.com/v1/timingsByCity?country=SA&city=Riyadh")
  .then((response) => console.log(response.data));
// استيراد صور الصلاة
import fajrImage from "./PICs/الفجر.jpg";
import dhuhrImage from "./PICs/الظهر.jpg";
import asrImage from "./PICs/العصر.jpg";
import maghribImage from "./PICs/المغرب.jpg";
import ishaImage from "./PICs/العشاء.jpg";
import moment from "moment";
import "moment/dist/locale/ar-dz";
moment.locale("ar-dz");

//use effect >> use for side effects >> API req
//we can do notation in use effect or as a event handler like click event that prevent infinite loop
export default function Prayers({
  city,
  setToday,
  setNextPrayeridx,
  setRemainingTime,
}) {
  const prayersArray = [
    { key: "Fajr", name: "الفجر" },
    { key: "Dhuhr", name: "الظهر" },
    { key: "Asr", name: "العصر" },
    { key: "Sunset", name: "المغرب" },
    { key: "Isha", name: "العشاء" },
  ];
  const [timigs, setTimigs] = React.useState({});
  const getTimings = React.useCallback(async () => {
    //async function to get the data from the API
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`
    );
    setTimigs(response.data.data.timings);
  }, [city, setTimigs]);
  useEffect(() => {
    getTimings(); //call the function to get the data from the API
  }, [getTimings]); //added getTimings as a dependency because when we select city that mean we called the function to get the data from the API
  // array to prevent running the effect after every render (change in the state)
  // ****************************************************************************************************************************************************************************//

  //to handle timer >> to show the time remaining to the next prayer
  useEffect(() => {
    const now = moment();
    setToday(now.format("MMM Do YYYY | h:mm"));
    //set the current time
    let interval = setInterval(() => {
      setupCountdown();
    }, 1000);
    return () => {
      //we clear it after the component is unmounted which mean when we select another city
      clearInterval(interval); //clear the interval to prevent memory leak
    };
  }, [timigs, setToday]);

  // the counter of the time remaining to the next prayer
  // متبقي حتي صلاه
  const setupCountdown = () => {
    if (!timigs || Object.keys(timigs).length === 0) return; // Ensure timigs is not empty
    const momentNow = moment();
    let prayerIndex = 0;
    if (
      momentNow.isAfter(moment(timigs["Fajr"], "hh:mm")) && //check if the current time is after the Fajr time and convert the time to moment object
      momentNow.isBefore(moment(timigs["Dhuhr"], "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timigs["Dhuhr"], "hh:mm")) &&
      momentNow.isBefore(moment(timigs["Asr"], "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timigs["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timigs["Sunset"], "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timigs["Sunset"], "hh:mm")) &&
      momentNow.isBefore(moment(timigs["Isha"], "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      // if the current time is after the Isha time which mean  the next prayer is Fajr
      prayerIndex = 0;
    }
    setNextPrayeridx(prayerIndex);
    // التايمر (الوقت المتبقي )
    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timigs[nextPrayerObject.key];
    // const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");
    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);
    const durationRemainingTime = moment.duration(remainingTime);
    // if the remaining time is less than 0 that mean the next prayer is the Fajr

    if (remainingTime < 0) {
      //the diff between now and midnight
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      //the diff between midnight and the Fajr
      const fajrDiff = moment(timigs["Fajr"], "hh:mm").diff(
        moment("00:00:00", "hh:mm:ss")
      );
      const totalDiff = midnightDiff + fajrDiff;
      remainingTime = totalDiff;
    }
    setRemainingTime(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
  };

  // ****************************************************************************************************************************************************************************//
  const prayers = [
    { key: "Fajr", name: "الفجر", image: fajrImage, time: timigs.Fajr },
    { key: "Dhuhr", name: "الظهر", image: dhuhrImage, time: timigs.Dhuhr },
    { key: "Asr", name: "العصر", image: asrImage, time: timigs.Asr },
    {
      key: "Sunset",
      name: "المغرب",
      image: maghribImage,
      time: timigs.Maghrib,
    },
    { key: "Isha", name: "العشاء", image: ishaImage, time: timigs.Isha },
  ];
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        {prayers.map((prayer, index) => (
          <Box key={index}>
            <Card
              sx={{
                height: "30vw",
                width: "18vw",
                marginLeft: index === 0 ? "10px" : "0",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={prayer.image}
                  alt={prayer.name}
                />
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
