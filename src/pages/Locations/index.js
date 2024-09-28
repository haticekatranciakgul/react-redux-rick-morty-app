import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../redux/locationsSlice';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';



function Location() {
  const locations = useSelector((state) => state.locations.items);
  const status = useSelector((state) => state.locations.status);
  const hasNextPage = useSelector((state) => state.locations.hasNextPage);
  const error = useSelector((state) => state.locations.error);
  const num = useSelector((state) => state.locations.num);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLocations());
    }

  }, [dispatch, status])

  if (status === "failed") {
    return <Error message={error} />;
  }

  if (!locations) {
    return null;
  }


  const handleLoadMore = () => {
    if (hasNextPage && status !== "loading") {
      dispatch(fetchLocations(num));
      console.log("handleLoadMore butonu")
    }
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {locations.map((location, id) => (
            <Grid xl={3} lg={3} md={3} sm={4} xs={6} key={`${location.id}-${id}`}>
              <Card margin={'auto'} sx={{ borderRadius: '10px' }} >
                <Grid container padding={2} >
                  <CardContent sx={{ textAlign: 'left', height: '200px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 500, color: 'text.secondary', marginBottom: '20px' }}>
                      {location.name}
                    </Typography>
                    <Typography variant='h6'>
                      Locations Type:
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary', marginBottom: '20px' }}>
                      {location.type}
                    </Typography>
                    <Typography variant='h6'>
                      Dimensions:
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                      {location.dimension}
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

export default Location