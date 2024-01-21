import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const regionQuery = searchParams.get('region');
    if (!regionQuery) return;

    setLoading(true);
    fetchByRegion(regionQuery)
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        <SearchForm handleSubmit={handleSubmit} />
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
