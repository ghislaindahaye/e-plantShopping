import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Récupérer le panier depuis le localStorage au démarrage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

const preloadedState = {
  cart: {
    items: loadCartFromStorage()
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState
});

// Sauvegarder le panier dans le localStorage à chaque changement
store.subscribe(() => {
  try {
    const cart = store.getState().cart.items;
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
});

export default store;