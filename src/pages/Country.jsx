import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCountryInfo = () => {
      setLoading(true);
      fetchCountry()
        .then(countryInfo => {
          setCountry(countryInfo);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchCountryInfo();
  }, []);
  return (
    <Section>
      <Container>
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
