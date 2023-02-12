import React,{useState,useContext} from 'react'

import {
  Typography, Card, CardContent,CircularProgress,
  TextField, Button, Paper, Chip, Box, Grid,
  CardActions, CardActionArea, Divider, CardMedia,Stack,MenuItem,Avatar
} from '@mui/material'
import CategoriesCard from '../Components/CategoriesCard';
import FolderIcon from '@mui/icons-material/Folder';
import InputLabel from '@mui/material/InputLabel';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { GlobalContext } from '../Context/Context';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
const OrderPage = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let formData = new FormData();
  const [firstName, setFirstName] = useState('');


  const [preview, setPreview] = useState(null)
  const [preview2, setPreview2] = useState(null)
  const [file, setFile] = useState(null)
  const [file2, setFile2] = useState(null)
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
      formData.append("profileImage", file);
      formData.append("firstName", firstName);
      const  editProduct = async(e)=> { 

        
        e.preventDefault();
        setSuccess('')
        setError('')
        axios({
          method: 'put',
          url: `${state.baseUrl}/updateProfile/${state.user.data._id}`,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials:true
        })
          .then(res => {
              // setLoadProduct(!loadProduct)
              console.log(`upload Success` + res.data);
              setSuccess(res.message
                )
              dispatch({
                type:"LOAD_SKELETON",
                payload:false
              })
              e.target.reset()
              setFile(null)
             
              setPreview(null)
          })
          .catch(err => {
            dispatch({
              type:"LOAD_SKELETON",
              payload:false
            })
            
              console.log("error: ", err);
              setError(err.response.data.message)
        
          })
          };
 
        
  return (
    <div
    >
      
      <Box sx={{display:'flex',flexDirection:"column",p:5,
      alignItems:{lg:"normal",sm:"normal",xs:"center"}}}>
        <form onSubmit={()=>{
          editProduct()
        }}>
<Box sx={{display:'flex',flexDirection:"column",maxWidth:"40em",

}}>
  
 {  (preview2)?
<Avatar  sx={{ width:{lg:200,sm:200,xs:150},ml:{lg:0,sm:0,xs:"5em"}, height:{lg:200,sm:200,xs:150}}}>
        <img src={preview2} height="200px" width="200" alt="" srcset="" />
      </Avatar>:
     <label htmlFor="select-Profile"><Avatar  sx={{ width:{lg:200,sm:200,xs:150},ml:{lg:0,sm:0,xs:"5em"}, height:{lg:200,sm:200,xs:150}}}>
        profile
      </Avatar></label>}
      <TextField 
                sx={{pl:5,pr:5}}
                 size="small"
                type="file"  
                id="select-Profile"

                name='select-Profile'
                onChange={(e) => {
                  setFile2(e.currentTarget.files[0])
                 
                  var url = URL.createObjectURL(e.currentTarget.files[0])

                  console.log("url: ", url);

                  setPreview2(url)
                }}
                 style={{ display: 'none' }}
                />
      <TextField 
                sx={{pl:5,pr:5}}
                 size="small"
                type="file"  
                id="select-image"

                name='select-image'
                onChange={(e) => {
                  setFile(e.currentTarget.files[0])
                 
                  var url = URL.createObjectURL(e.currentTarget.files[0])

                  console.log("url: ", url);

                  setPreview(url)
                }}
                 style={{ display: 'none' }}
                />
      <TextField id="standard-basic" label="Updated Full Name" variant="standard" />

      {  (preview)?
           <Box
  
           sx={{display:"flex",justifyContent:"center",
             m:2, pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"310px"},backgroundColor:"gray" 
         ,borderRadius:"15px"
         }}
           > <div  className='zoom'>

          
                <img  style={{margin:"5px 0px 5px 22px "}} src={preview} height="150px" width="280px" alt="" srcset="" />
                </div></Box>:<label htmlFor="select-image"><Box
  
  sx={{display:"flex",justifyContent:"center",
    m:3, pl: 3, pr: 5,width:{lg:"400px",sm:"400px",xs:"310px"},backgroundColor:"gray" 
,borderRadius:"15px"
}}
  >

<CameraAltIcon sx={{fontSize:"6em"}} />

  </Box></label>
              }

<TextField id="filled-basic" label="new Category Name" variant="filled" />
<Button type='submit'>
Done

</Button>

</Box></form>
<Typography sx={{m:2,fontSize:{xs:30,sm:50,lg:50}}} >

 All Catagries
</Typography>

<Box>
<CategoriesCard
name="asds"
image="data:image/jpeg;base64,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"
/>
</Box>

<Button variant="contained">Logout</Button>
      </Box></div>
  )
}

export default OrderPage