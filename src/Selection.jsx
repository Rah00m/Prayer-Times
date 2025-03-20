import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selection({setCity,setNameCity}) {

    const handleChange = (event) => {
        const selectedApiName = event.target.value;
        const selectedCity = avilableCities.find(city => city.apiName === selectedApiName);
        
        if (selectedCity) {
          setCity(selectedCity.apiName);
          setNameCity(selectedCity.displayName);
        }
      };
    
  const avilableCities = [
    {
        displayName: "مكة المكرمة",
        apiName: "Makkah al Mukarramah",
    },
    {
        displayName: "الرياض",
        apiName: "Riyadh",
    },
    {
        displayName: "الدمام",
        apiName: "Dammam",
    },
];
  return (
<Box sx={{ margin: '60px auto 0'}}>
<FormControl style={{width:'20%' , justifyContent:'center' , marginRight:'40%'}}>
        <InputLabel id="demo-simple-select-label">
        <span style={{color:'black'}}>City</span>
        </InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="City"
        onChange={handleChange}
        // value={City}
        >
        {avilableCities.map((city) => {
							return (
								<MenuItem
									value={city.apiName}
									key={city.apiName}
                                    displayName={city.displayName}
								>
									{city.displayName}
								</MenuItem>
							);
						})}
					</Select>
      </FormControl>
    </Box>
  );
}