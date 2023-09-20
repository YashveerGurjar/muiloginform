import React from "react";
import {Grid,Paper,Avatar, Typography,TextField, Checkbox, Stack, Button} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
function Signup(){
    return(
        <Grid>
            <Paper elevation={10} align="center" sx={{padding:"25px", width:"350px", margin:"10px auto"}}>

            <Avatar sx={{bgcolor:"#00acee"}}>
                <LockOpenIcon></LockOpenIcon>                
            </Avatar>
            <Typography variant="h5" sx={{margin:"10px",fontWeight:"bold",bgcolor:"#00acee"}}>
                    SignUP
                </Typography>
            <Typography sx={{margin:"15px 0px 20px 0px"}}>
                    Please fill this form
            </Typography>
            <form>
            <TextField id="Fname" label="FirstName" variant="outlined" fullWidth sx={{margin:"10px auto"}}/>
            <TextField id="Lname" label="LastName" variant="outlined" fullWidth sx={{margin:"10px auto"}}/>
            <TextField id="Mail" label="Email" variant="outlined" fullWidth sx={{margin:"10px auto"}}/>
            <TextField type="password" id="Password" label="Password" variant="outlined" fullWidth sx={{margin:"10px auto"}}/>
            <TextField type="password" id="Confirm-Password" label="Confirm-Password" variant="outlined" fullWidth sx={{margin:"10px auto"}}/>
            
            <Checkbox /> 
            I agree on <a href="#"> terms & conditions </a>
            <Stack spacing={2}>
                <Button variant="contained" color="success">Register</Button>
                <Button variant="contained" color="error">Cancel</Button>
                
            </Stack>
            </form>
            </Paper>
        </Grid>
    )
}
export default Signup;