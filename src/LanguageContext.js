import React, { createContext, useState, useCallback, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en");
    const [languageData, setLanguageData] = useState({
        Project: [],
        Banner: [],
        Education: [],
        About_me: {},
        Social_Media: []
      });    

    const fetchLanguageData = useCallback(() => {
        const dataUrl = `${process.env.PUBLIC_URL}/locales/${language}_content.json`;
        fetch(dataUrl)
          .then((response) => response.json())
          .then((data) => setLanguageData(data))          
          .catch((error) => console.error('Error fetching language data:', error));          
      }, [language]);

      useEffect(() => {
        fetchLanguageData();  // Now `fetchLanguageData` is memoized and doesn't cause a warning
      }, [fetchLanguageData]);  // Now `fetchLanguageData` is a stable reference

    // console.log("fetched language data : ", languageData)

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, languageData, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
