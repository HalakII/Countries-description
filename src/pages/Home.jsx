import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    getCountries()
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading>{error}</Heading>}
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
