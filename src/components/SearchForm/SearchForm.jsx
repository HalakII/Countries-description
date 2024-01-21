import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ handleSubmit }) => {
  const [region, setRegion] = useState('');

  const handleChange = e => {
    setRegion(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    handleSubmit(region);
    setRegion('');
  };

  return (
    <SearchFormStyled onSubmit={submitForm}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={handleChange}
        aria-label="select"
        name="region"
        defaultValue="default"
        required
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        {regions.map(({ id, name, value }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </Select>
    </SearchFormStyled>
  );
};
