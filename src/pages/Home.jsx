import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCountriesList = () => {
      setLoading(true);
      getCountries()
        .then(countriesList => {
          setCountries(countriesList);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchCountriesList();
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Countries</Heading>
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
