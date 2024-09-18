import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          {characters.map((character,id) => (
            <Grid xs={3} key={`${character.id}-${id}`}>
              <Item>
                <img src={character.image} alt={character.name} width={'auto'} objectfit={'cover'} height={'200px'} />
                <Typography variant="h5" sx={{ pt: 2 }} gutterBottom>
                  {character.name}
                </Typography>
                <Typography>{character.id}</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && <div >
          {/* <Button variant="contained" sx={{ m: 3 }} onClick={() => dispatch(fetchCharacters(num))}>Load More</Button> */}
          <Button variant="contained" sx={{ m: 3 }} onClick={handleLoadMore}>Load More</Button>
        </div>}
        {!hasNextPage && <div className='row my-5  d-flex justify-content-center align-content-center'>
          <button className='btn btn-light w-25' disabled>There is nothing to be shown</button>
        </div>}
      </Box>
    </Container>
  )
}

export default Home