import {
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
  LinkBtn,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { countryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId)
      .then(data => {
        console.log(data);
        setCountryInfo(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [countryId]);
  return (
    <Section>
      <Container>
        <div>
          <LinkBtn to={location.state?.from ?? '/'}>Go back</LinkBtn>
        </div>
        {error && <Heading>{error}</Heading>}
        {loading && <Loader />}
        {countryInfo && <CountryInfo {...countryInfo} />}
      </Container>
    </Section>
  );
};
