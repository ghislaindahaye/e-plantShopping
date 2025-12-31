import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Vérifier si l'article existe déjà dans le panier
      const existingItem = state.items.find(item => item.name === action.payload.name);
      
      if (existingItem) {
        // Si l'article existe, augmenter la quantité
        existingItem.quantity += 1;
      } else {
        // Si l'article n'existe pas, l'ajouter avec une quantité de 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeItem: (state, action) => {
      // Retirer un article par son nom
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Mettre à jour la quantité d'un article spécifique
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      
      if (item) {
        if (quantity <= 0) {
          // Si la quantité est 0 ou moins, retirer l'article
          state.items = state.items.filter(item => item.name !== name);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;