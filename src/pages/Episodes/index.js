import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEpisodes } from '../../redux/episodesSlice';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';



function Episode() {
  const episodes = useSelector((state) => state.episodes.items);
  const status = useSelector((state) => state.episodes.status);
  const hasNextPage = useSelector((state) => state.episodes.hasNextPage);
  const error = useSelector((state) => state.episodes.error);
  const num = useSelector((state) => state.episodes.num);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEpisodes());
    }

  }, [dispatch, status])

  if (status === "failed") {
    return <Error message={error} />;
  }

  if (!episodes) {
    return null;
  }


  const handleLoadMore = () => {
    if (hasNextPage && status !== "loading") {
      dispatch(fetchEpisodes(num));
      console.log("handleLoadMore butonu")
    }
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {episodes.map((episode, id) => (
            <Grid xl={3} lg={3} md={3} sm={4} xs={6} key={`${episode.id}-${id}`}>
              <Card margin={'auto'} sx={{ borderRadius: '10px' }} >
                <Grid container padding={2} >
                  <CardMedia
                    component="img"
                    height="auto"
                    src={episodes.image}
                    alt={episodes.name} width={'auto'} objectfit={'cover'}
                    sx={{ borderRadius: '10px' }}
                  />
                  <CardContent sx={{ textAlign: 'left', height: '200px' }}>
                    <Typography variant="h4" sx={{ color: 'text.secondary' }}>
                      {episode.name}
                    </Typography>
                    <Typography variant='h6'>
                      Episode:
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                      {episode.id}
                    </Typography>
                    <Typography variant='h6'>
                      Episode Air Date:
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                      {episode.air_date}
                    </Typography>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && <div >
          <Button variant="contained" sx={{ m: 3 }} onClick={handleLoadMore}>Load More</Button>
        </div>}
        {!hasNextPage &&
          <div>
            <Button variant="contained" sx={{ m: 3 }}>There is nothing to be shown</Button>
          </div>
        }
      </Box>
    </Container>
  )
}

export default Episode