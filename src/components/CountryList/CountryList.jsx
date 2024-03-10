import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  const defaultMovieImg =
    'https://i1.sndcdn.com/artworks-vWfRJMCOvicc6r6d-IzXL8A-t500x500.jpg';
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => {
        return (
          <GridItem key={id}>
            <Link to={`/country/${id}`} state={{ from: location }}>
              <img
                src={country === 'Russia' ? defaultMovieImg : flag}
                alt={country}
              />
              <p style={{ color: 'white', textAlign: 'center' }}>
                {country === 'Russia' ? 'terrorist country' : country}
              </p>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
