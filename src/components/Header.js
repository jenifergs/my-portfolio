import React, { useState } from "react";
import logo from './logo.svg';

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("about"); // Estado inicial: 'about'

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <header className="bg-black px-4 flex items-center justify-around w-full mx-auto fixed">
      <div className="flex items-center space-x-4 container bg-black">
        <a
          className={`text-lg font-semibold ${
            selectedOption === "about"
              ? "gradient-text border-b-2 border-gradient-bottom"
              : "text-gradient"
          }`}
          onClick={() => handleOptionClick("about")}
          href="#about"
        >
          About
        </a>
        <a
          className={`text-lg font-semibold ${
            selectedOption === "projects"
              ? "gradient-text border-b-2 border-gradient-bottom"
              : "text-gradient"
          }`}
          onClick={() => handleOptionClick("projects")}
        href="#projects"
        >
          Projects
        </a>
        <a
          className={`text-lg font-semibold ${
            selectedOption === "contact"
              ? "gradient-text border-b-2 border-gradient-bottom"
              : "text-gradient"
          }`}
          onClick={() => handleOptionClick("contact")}
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div>
        <img src={logo} alt="Logo" className="w-32 h-32 p-0" />
      </div>
    </header>
  );
};

export default Header;
