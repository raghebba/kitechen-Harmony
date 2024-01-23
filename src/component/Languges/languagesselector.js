import React from 'react';
import BoxDisplay from '../UI/boxDisplay';

function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  return (
    <BoxDisplay>
      <h3>Select a Language:</h3>
      <div className="flag-container">
        <button
          className={`flag ${selectedLanguage === 'british' ? 'selected' : ''}`}
          onClick={() => onLanguageChange('british')}
        >
          🇬🇧 British
        </button>
        <button
          className={`flag ${selectedLanguage === 'french' ? 'selected' : ''}`}
          onClick={() => onLanguageChange('french')}
        >
          🇫🇷 French
        </button>
        <button
          className={`flag ${selectedLanguage === 'tunisian' ? 'selected' : ''}`}
          onClick={() => onLanguageChange('tunisian')}
        >
          🇹🇳 Tunisian
        </button>
      </div>
    </BoxDisplay>
  );
}

export default LanguageSelector;
