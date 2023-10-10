import React, { createContext, useContext, useState } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

const LanguageContext = createContext();

function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, setFavoriteLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { favoriteLanguage, setFavoriteLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(favoriteLanguage);
    const nextIndex = currentIndex === 0 ? 1 : 

0;
    setFavoriteLanguage(languages[nextIndex]);
  };

  return (
    <div>
      <p id="favoriteLanguage">favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
