import React from 'react';
import { useSelector } from 'react-redux';

import { CardItems } from '../cardItems';

import { Masonry } from '@mui/lab';
import styled from '@emotion/styled';

const MyCard = styled('div')({
  paddingTop: 20,
});

export const Card = ({ filter }) => {
  const card = useSelector((state) => state.card.cardItems);
  const favorite = useSelector((state) => state.favorite.favoriteItems);

  const status = useSelector((state) => state.card.status);

  return (
    <MyCard>
      <Masonry columns={4} spacing={2}>
        {status === 'loading' && <h2>loading...</h2>}
        {filter
          ? favorite.map((item) => (
              <CardItems
                key={item.character}
                title={item.title}
                quote={item.quote}
                character={item.character}
              />
            ))
          : card.map((item) => (
              <CardItems
                key={item.character}
                title={item.anime}
                quote={item.quote}
                character={item.character}
              />
            ))}
      </Masonry>
    </MyCard>
  );
};
