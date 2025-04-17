import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const availableCities = [
  { displayName: "مكة المكرمة", apiName: "Makkah al Mukarramah", country: "SA" },
  { displayName: "الرياض", apiName: "Riyadh", country: "SA" },
  { displayName: "الدمام", apiName: "Dammam", country: "SA" },
  { displayName: "القاهرة", apiName: "Cairo", country: "EG" },
  { displayName: "اسكندرية", apiName: "Alexandria", country: "EG" },
  { displayName: "قنا", apiName: "Qena", country: "EG" },
  { displayName: "دبي", apiName: "Dubai", country: "AE" },
  { displayName: "إسطنبول", apiName: "Istanbul", country: "TR" },
];
const countries = [
  { name: "السعودية", code: "SA" },
  { name: "مصر", code: "EG" },
  { name: "الإمارات", code: "AE" },
  { name: "تركيا", code: "TR" }
];
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
    <FormControl style={{ width: '25%', margin: 'auto', display: 'flex' }}>
      <InputLabel style={{width: '35%'} }>{ type === "country" ? "الدولة" : "المدينة"}</InputLabel>
      <Select label={type === "country" ? "الدولة" : "المدينة"} onChange={handleChange}>
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