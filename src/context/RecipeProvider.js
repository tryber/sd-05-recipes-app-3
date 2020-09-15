import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';

const RecipeProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState('MainFood');
  const [details, setDetails] = useState(['data']);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const context = {
    email,
    setEmail,
    password,
    setPassword,
    fetching,
    setFetching,
    data,
    setData,
    search,
    setSearch,
    page,
    setPage,
    details,
    setDetails,
    categories,
    setCategories,
    category,
    setCategory,
  };

  return <RecipeContext.Provider value={context}>{children}</RecipeContext.Provider>;
};

export default RecipeProvider;

RecipeProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
