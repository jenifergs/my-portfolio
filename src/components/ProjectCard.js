import React from 'react';

function ProjectCard({ language, description, repository, image }) {
  const cardStyle = {
    borderRadius: '0.5rem',
    boxShadow: '10px 10px 20px 1px rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    width: '100%',
    maxWidth: '18rem',
    height: '20rem',
    display: 'flex',
    flexDirection: 'column', // Para que os elementos se empilhem verticalmente
    justifyContent: 'space-between', // Para alinhar os elementos verticalmente
  };

  const linkStyle = {
    background: 'linear-gradient(to right, #C85AD3, #E34787, #FF7B00)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    textAlign: 'center',
    textDecoration: 'none',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt="" />
      <p className="font-semibold my-2 text-center">{language}</p>
      <p className="mt-2 text-justify text-xs py-4">{description}</p>
      <a
        href={repository}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Repositório
      </a>
    </div>
  );
}

export default ProjectCard;
