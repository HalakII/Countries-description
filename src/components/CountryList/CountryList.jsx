import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => {
        return (
          <GridItem key={id}>
            <img
              src={country === 'Russia' ? defaultMovieImg : flag}
              alt={country}
            />
            <p>{country === 'Russia' ? 'terrorist country' : country}</p>
          </GridItem>
        );
      })}
    </Grid>
  );
};
