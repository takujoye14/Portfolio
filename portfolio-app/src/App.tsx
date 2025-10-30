import React, { useState } from 'react';
import { profileDataEN } from './profile-data';
import { profileDataFR, i18nLabels } from './profile-dataFR';
import Header from './components/Header';
import SectionCard from './components/SectionCard';

const FLAGS = {
    en: 'https://flagcdn.com/w20/gb.png', 
    fr: 'https://flagcdn.com/w20/fr.png',
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  const currentProfileData = lang === 'fr' ? profileDataFR : profileDataEN;
  const labels = i18nLabels[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLanguage = (newLang: 'en' | 'fr') => {
      setLang(newLang);
  }

  return (
    <div className="app-container">
      
      {/* Language Switcher */}
      <div className="language-switcher">
          <button onClick={() => toggleLanguage('en')} className={lang === 'en' ? 'flag-button active' : 'flag-button'}>
              <img src={FLAGS.en} alt="English Flag" />
          </button>
          <button onClick={() => toggleLanguage('fr')} className={lang === 'fr' ? 'flag-button active' : 'flag-button'}>
              <img src={FLAGS.fr} alt="French Flag" />
          </button>
      </div>

      <div className="main-content-wrapper">
        <Header 
            profile={currentProfileData} 
            scrollToSection={scrollToSection} 
            viewExperienceLabel={labels.viewExperience} 
        />

        <main className="main-sections">
          {/* This loop now uses the fully populated sections array from currentProfileData */}
          {currentProfileData.sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} {currentProfileData.name}. {labels.footerBuiltWith}</p>
          <p>{labels.footerInternship}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;