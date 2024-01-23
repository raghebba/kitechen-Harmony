import {useState,createContext,useContext} from "react"


const LanguageContext = createContext()

export function LanguageProvider ({children}){
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      // You can add code here to handle language change and update your app's language settings.
    };
    return (
        <LanguageContext.Provider value={{ selectedLanguage, handleLanguageChange }}>
          {children}
        </LanguageContext.Provider>
      );
}

export function useLanguage() {
    return useContext(LanguageContext);
  }