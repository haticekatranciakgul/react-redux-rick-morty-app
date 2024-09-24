import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CircleIcon from '@mui/icons-material/Circle';



function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);
  const num = useSelector((state) => state.characters.num);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters(1));
    }

  }, [dispatch, status])

  if (!characters) {
    return null;
  }

  if (status === "failed") {
    return <Error message={error} />;
  }


  const handleLoadMore = () => {
    if (hasNextPage && status !== "loading") {
      dispatch(fetchCharacters(num));
      console.log("handleLoadMore butonu")
    }
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {characters.map((character, id) => (
            <Grid xs={3} key={`${character.id}-${id}`}>
              <Link  to={`/character/${character.id}`} >
                <Card margin={'auto'}  sx={{ borderRadius: '10px' }} >
                  <Grid container padding={2} >
                      <CardMedia
                        component="img"
                        height="auto"
                        src={character.image}
                        alt={character.name} width={'auto'} objectfit={'cover'}
                        sx={{ borderRadius: '10px'}}
                      />
                      <CardContent  sx={{textAlign:'left', height: '150px'}}>
                        <Typography variant="h5" sx={{ color: 'text.secondary'}}>
                          {character.name}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary'}}>
                        {character.status === 'Alive' ? <CircleIcon sx={{fontSize:'10px', marginRight:'5px' , color:'green'}} /> : character.status === 'Dead' ? <CircleIcon sx={{fontSize:'10px', marginRight:'5px' , color:'red'}} /> : <CircleIcon sx={{fontSize:'10px', marginRight:'5px' , color:'gray'}} />}
                          {character.status} - {character.species}
                        </Typography>
                        <Typography variant='h6' sx={{ color: '#bdbdbd4a'}}>
                        Last known location: <br/>
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary'}}>
                          {character.location.name}
                        </Typography>
                      </CardContent>
                  </Grid>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && <div >
          <Button variant="contained" sx={{ m: 3 }} onClick={handleLoadMore}>Load More</Button>
        </div>}
        {!hasNextPage &&
          <div className='row my-5  d-flex justify-content-center align-content-center'>
            <button className='btn btn-light w-25' disabled>There is nothing to be shown</button>
          </div>
        }
      </Box>
    </Container>
  )
}

export default Home