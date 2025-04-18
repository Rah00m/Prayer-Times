import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { availableCities, countries } from "./availableCities";

export default function Selection({ 
  type, 
  setCity, 
  setNameCity, 
  setCountry, 
  setNameCountry, 
  selectedCountry 
}) {

  const handleChange = (event) => {
    const value = event.target.value;

    if (type === "country") {
      const country = countries.find(c => c.code === value);
      setCountry(country.code);
      setNameCountry(country.name);
    } else {
      const selectedCity = availableCities.find(city => city.apiName === value && city.country === selectedCountry);
      if (selectedCity) {
        setCity(selectedCity.apiName);
        setNameCity(selectedCity.displayName);
      }
    }
  };
    
  const options = type === "country"
  ? countries
  : availableCities.filter(city => city.country === selectedCountry);


//   return (
// <Box sx={{ margin: '60px auto 0'}}>
// <FormControl style={{width:'20%' , justifyContent:'center' , marginRight:'40%'}}>
//         <InputLabel id="demo-simple-select-label">
//         <span style={{color:'black'}}>City</span>
//         </InputLabel>
//         <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         label="City"
//         onChange={handleChange}
//         // value={City}
//         >
//         {availableCities.map((city) => {
// 							return (
// 								<MenuItem
// 									value={city.apiName}
// 									key={city.apiName}
//                                     displayName={city.displayName}
// 								>
// 									{city.displayName}
// 								</MenuItem>
// 							);
// 						})}
// 					</Select>
//       </FormControl>
//     </Box>
//   );
// }
return (
  <Box sx={{ margin: '60px auto' }}>
<FormControl
  sx={{
    width: {
      xs: '80%', 
      sm: '60%', 
      md: '40%',  
      lg: '25%', 
    },
    margin: 'auto',
    display: 'flex',
    maxWidth: '400px',
  }}
>
<InputLabel 
  id={`${type}-label`} 
  sx={{ color: "white" }}
>
  {type === "country" ? "الدولة" : "المدينة"}
</InputLabel>

<Select
  labelId={`${type}-label`}
  defaultValue=""
  onChange={handleChange}
  sx={{
    color: "white",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    ".MuiSvgIcon-root": { //arrow of the selection box
      color: "white",
    },
  }}
>
  <MenuItem value="" disabled>
    {type === "country" ? "اختر الدولة" : "اختر المدينة"}
  </MenuItem>
  {options.map((item) => (
    <MenuItem
      key={type === "country" ? item.code : item.apiName}
      value={type === "country" ? item.code : item.apiName}
    >
      {type === "country" ? item.name : item.displayName}
    </MenuItem>
  ))}
</Select>
    </FormControl>
  </Box>
);
}