import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardFetch } from './redux/card/reducer';

import { Filter, Card } from './components';

import { Container } from '@mui/material';

export const App = () => {
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardFetch());
  }, [dispatch]);

  return (
    <div className="app">
      <Container maxWidth="xl">
        <div className="filter ">
          <Filter setFilter={setFilter} filter={filter} />
        </div>
          <Card filter={filter} />
      </Container>
    </div>
  );
};
