import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//This file contains the code for the Search Grid to SHorten the URLs

function SearchGrid(props) {

    //declaring the ref
    const input_link = useRef(null);
    //format the response/result
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null);
    }

    //function to shorten the URL
    const handlesubmit = async (event) => {
        const link = input_link.current.value;
        const baseURL = "https://api.shrtco.de/v2";
        if (link) {
            try {
              const res = await fetch(`${baseURL}/shorten?url=${link}`);
              console.log('Data Test', fortmatResponse(res));
            }
             catch (err) {
              alert(err.message);
            }
        }
    }

  return (
    <Grid item>
        <Card sx={{ display: 'flex', 
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('https://source.unsplash.com/7brhZmwXn08')`,}}>
        <CardContent>
            <Grid  spacing={4}
            sx={{
                width: 1000,
                maxWidth: '100%',
                direction: 'row',
                justifyContent: 'center',
                display: 'inline-flex'
            }}
            >
                <form onSubmit={(event) => handlesubmit(event)}>
                    <TextField fullWidth label="Shorten Your Link Here..." id="inputlink" ref={input_link}
                    sx={{
                        backgroundColor: '#fff',
                        opacity: '0.9',
                        marginRight: 2
                    }}
                    />
                    <Button type="submit" variant="contained" color="success" sx={{ width: '100%'}}>
                        Shorten it!
                    </Button>
                </form>
            </Grid>
        </CardContent>
        </Card>
    </Grid>
  );
}

export default SearchGrid;