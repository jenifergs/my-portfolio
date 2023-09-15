import React from 'react';

function ProjectCard({ language, description, repository, image }) {
  const cardStyle = {
    // background: 'linear-gradient(to right, #C85AD3, #E34787, #FF7B00)',
    borderRadius: '0.5rem',
    boxShadow: '10px 10px 20px 1px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    width: '100%',
    maxWidth: '18rem', // Ajuste a largura máxima conforme necessário
    height: '20rem', // Ajuste a altura conforme necessário
  };
  

  return (
    <div style={cardStyle}>
      <img src={ image } alt="" />
      {/* Nome da Linguagem em Destaque */}
      <p className=" font-semibold my-2 text-center">{language}</p>

      {/* Descrição do Projeto */}
      <p className=" mt-2 text-justify text-xs py-4">{description}</p>

      <a
        href={ repository}
        target="_blank"
        className="block text-center background-gradient1 text-white py-2 rounded-md hover:underline bottom-0"
      >
        Repositório
      </a>
    </div>
  );
}

export default ProjectCard;

