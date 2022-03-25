import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

export const Filter = ({ setFilter, filter }) => {
  const handleSubmitFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <ButtonGroup disableElevation variant="contained">
      <Button variant={filter ? 'contained' : 'outlined'} onClick={() => handleSubmitFilter(false)}>
        Все
      </Button>
      <Button variant={filter ? 'outlined' : 'contained'} onClick={() => handleSubmitFilter(true)}>
        Улубленные
      </Button>
    </ButtonGroup>
  );
};
