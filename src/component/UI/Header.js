import React from "react";
import { useAppContext } from "../../contextAPI/languageContext";
import  "./header.module.css";

const Styles = {
    logo: {
        width: '50px', // Set a small width for the logo; adjust as needed
        height: 'auto', // Maintain aspect ratio
      },
}

const Header = () => {
  const { selectedLanguage } = useAppContext();
  return (
    <header>
      {selectedLanguage === "tunisian" ? (
        <h1> توانسة هارموني <br /> Beta </h1>
      ) : selectedLanguage === "french" ? (
        <h1>Harmonie en Cuisine <br /> Beta</h1>
      ) : (
        <h1>Kitchen Harmony  <br /> Beta</h1>
      )}
      <img
        style={Styles.logo}
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="logo"
      />
    </header>
  );
};

export default Header;
