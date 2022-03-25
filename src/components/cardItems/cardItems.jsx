import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteCard } from '../../redux/card/reducer';
import { setAddFavorite, setDeleteFavorite } from '../../redux/favorite/reducer';

import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';

export const CardItems = ({ title, quote, character }) => {
  const itemsFavorites = useSelector((state) => state.favorite.favoriteItems);
  const dispatch = useDispatch();

  const isItemFavorite = itemsFavorites.some(
    (favoriteItems) => favoriteItems.character === character,
  );

  const handleSubmitDelete = () => {
    dispatch(setDeleteCard({ character }));
    dispatch(setDeleteFavorite({ character }));
  };

  const handleSubmitAddFavorite = () => {
    if (isItemFavorite) {
      dispatch(setDeleteFavorite({ character }));
    } else {
      dispatch(setAddFavorite({ title, quote, character }));
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quote}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleSubmitAddFavorite}>
          {isItemFavorite ? <FavoriteIcon /> : <FavoriteTwoToneIcon />}
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={handleSubmitDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
