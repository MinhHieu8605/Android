import React, { useState } from 'react';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('explore');

  const handleTabChange = (tabKey) => {
    if (tabKey === 'cart') setActiveScreen('cart');
    else if (tabKey === 'favourite' || tabKey === 'favorite') setActiveScreen('favourite');
    else setActiveScreen('explore');
  };

  return (
    <CartProvider>
      {activeScreen === 'explore' && (
        <SearchScreen onTabChange={handleTabChange} />
      )}
      {activeScreen === 'cart' && (
        <CartScreen onTabChange={handleTabChange} />
      )}
      {activeScreen === 'favourite' && (
        <FavouriteScreen onTabChange={handleTabChange} />
      )}
    </CartProvider>
  );
}
