import React,{useState} from 'react'
import {
  Typography, Card, CardContent,CircularProgress,
  TextField, Button, Paper, Chip, Box, Grid,
  CardActions, CardActionArea, Divider, CardMedia,Stack,MenuItem
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { AddPhotoAlternateIcon,ErrorIcon} from '@mui/icons-material'

const AddNewItem = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

 
  const [preview, setPreview] = useState(null)
  const [file, setFile] = useState(null)
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
  return (
    <div>

<form style={{margin:'5px'}} >



  <Box
  
  sx={{display:"flex",justifyContent:"center",
    m:3, pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"310px"},backgroundColor:"gray" 
,borderRadius:"15px"
}}
  >

<CameraAltIcon sx={{fontSize:"10em",m:4}} />

  </Box>
        <TextField
       
          sx={{ pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"370px"} }}
          size="medium"
          type="text" placeholder="Enter your Item name" required
         
          >
        </TextField>
        <br /><br />
        <Box sx={{ minWidth: 120 }}>
      <FormControl   sx={{ pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"370px"} }}>
        <InputLabel
        sx={{ pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"340px"} }}
        id="demo-simple-select-label">Product Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
         
          onChange={handleChange}
        >
          <MenuItem value={10}>Grocery</MenuItem>
          <MenuItem value={20}>Vegetable</MenuItem>
          <MenuItem value={30}>Fruit</MenuItem>
          <MenuItem value={40}>Masala</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <br /><br />
        <TextField
          sx={{ pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"370px"} }}
          id="outlined-multiline-static"
        
          multiline
          rows={4}
         
        />
       <Box sx={{display:"flex",alignItems:"center"}}>
      <Typography
      sx={{ml:1,p:3}}
      >
        Unit Price 
      </Typography>

      <TextField
         
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
          type="number"
        />
       </Box>

      
        <br /><br />
        


{(!error)?"":<p style={{paddingLeft:"35px" ,color:"red", display:"flex"}}>
  {/* <ErrorIcon/> */}
 <p style={{marginLeft:"10px"}}>{error}</p></p>}
{/* {(fileUpload && !storageURL === "")?
        <Button sx={{ml:10}} type="submit" variant="outlined">Add Product </Button>
      : 
      <Button disabled sx={{ml:10}} type="submit" variant="outlined">Add Product </Button>
      } */}
      <Button sx={{ml:10}} type="submit" variant="contained">Add Product </Button>
        </form>
    </div>
  )
}

export default AddNewItem