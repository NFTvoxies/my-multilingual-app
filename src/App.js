import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </header>
      <main>
        <section className="language-section">
          <h2>{t('languageSection')}</h2>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('ar')}>العربية</button>
          </div>
        </section>
        <section className="features">
          <h2>{t('featuresTitle')}</h2>
          <ul>
            <li>{t('feature1')}</li>
            <li>{t('feature2')}</li>
            <li>{t('feature3')}</li>
          </ul>
        </section>
        <section className="about-us">
          <h2>{t('aboutUs')}</h2>
          <p>{t('aboutText')}</p>
        </section>
      </main>
      <footer>
        <p>{t('contactUs')}: contact@example.com</p>
      </footer>
    </div>
  );
}

export default App;