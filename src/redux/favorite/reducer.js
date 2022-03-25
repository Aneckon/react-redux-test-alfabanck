const { createSlice } = require("@reduxjs/toolkit");


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: []
  },
  reducers: {
    setAddFavorite: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    setDeleteFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(card => card.character !== action.payload.character)
    }
  }
})


export const { setAddFavorite, setDeleteFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer