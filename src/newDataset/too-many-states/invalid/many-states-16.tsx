import React, { useState } from 'react';

export const ManyStates16 = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const [prefs, setPrefs] = useState(JSON.parse(localStorage.getItem('prefs') || '[]'));
  const [flag, setFlag] = useState(localStorage.getItem('flag') === 'true');
  return <div>{theme}{lang}{token}{user.name}{prefs.length}{flag}</div>;
};