

import React from 'react'
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Loading from '../../components/Loading';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';


function Detail() {
  const [data, setData] = useState(null);
  let { id } = useParams();


  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`).then(res => res.data).then((data) => { setData(data) });
  }, [id])

  return (
    <Grid container >
      <Grid xs={8} margin={'auto'} >
        {!data ? <Loading /> :
          <Card sx={{ maxWidth: 800 }} margin={'auto'}  >
            <Grid container padding={2}>
              <Grid xs={12} md={6} lg={6} >
                <CardMedia
                  component="img"
                  height="auto"
                  src={data.image}
                  alt={data.name} width={'auto'} objectfit={'cover'}
                />
              </Grid>
              <Grid xs={12} md={6} lg={6}  >
                <CardContent>
                  <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                    {data.name}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                    {data.status === 'Alive' ? <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'green' }} /> : data.status === 'Dead' ? <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'red' }} /> : <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'gray' }} />}
                    {data.status} - {data.species}
                  </Typography>
                  <Typography variant='h6' sx={{ color: '#bdbdbd4a' }}>
                    Last known location: <br />
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                    {data.location.name}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        }
      </Grid>
    </Grid>
  )
}

export default Detail