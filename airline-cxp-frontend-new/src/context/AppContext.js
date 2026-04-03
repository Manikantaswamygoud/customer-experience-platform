import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest', loyaltyTier: 'Blue' });
  const [search, setSearch] = useState({});
  const [booking, setBooking] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser, search, setSearch, booking, setBooking }}>
      {children}
    </AppContext.Provider>
  );
}