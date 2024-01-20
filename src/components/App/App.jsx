import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
