

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
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


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
          <Card sx={{ maxWidth: 600, borderRadius: '10px' }} margin={'auto'}  >
            <Grid container padding={2}>
              <Grid xs={12} md={6} lg={6} >
                <CardMedia
                  component="img"
                  height="auto"
                  src={data.image}
                  alt={data.name} width={'auto'} objectfit={'cover'}
                  sx={{ borderRadius: '10px' }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={6}  >
                <CardContent
                sx={{
                  textAlign: 'left'

                }}>
                  <Typography variant="h2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: {
                        md: 30,
                        xs: 20
                      }
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: 'text.secondary',
                      fontSize: {
                        md: 30,
                        xs: 20
                      }
                    }}>
                    {data.status === 'Alive' ? <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'green' }} /> : data.status === 'Dead' ? <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'red' }} /> : <CircleIcon sx={{ fontSize: '10px', marginRight: '5px', color: 'gray' }} />}
                    {data.status} - {data.species}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#bdbdbd4a',
                      fontSize: {
                        md: 25,
                        xs: 20
                      }
                    }}>
                    Last known location: <br />
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: 'text.secondary',
                      fontSize: {
                        md: 30,
                        xs: 20
                      }
                    }}>
                    {data.location.name}
                  </Typography>

                </CardContent>
                <CardActions
                 sx={{
                  justifyContent:'end'

                }}
                >
                   <Link  to={`/`} > 
                    <Button variant="contained">Back</Button>
                   </Link>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        }
      </Grid>
    </Grid>
  )
}

export default Detail