import blogsApi from "../images/blogsApi.png";
import ngCash from "../images/ngCash.png";

const projectsData = [
  {
    id: 1,
    language: "Node.js | JavaScript | Docker",
    description: "Backend desenvolvido utilizando sequilize e express, em um banco de dados MySQL com autenticação e autorização implementada via token JWT e uma arquitetura MVC ",
    repository: "https://github.com/jenifergs/blogs-api",
    image: blogsApi
  },
  {
    id: 2,
    language: "Node.js | React | TypeScript",
    description: "Projeto fullstack utilizando banco de dados PostgreSql, servidor express, frontenmd em Reactjs e cada uma das partes está rodando em containers docker",
    repository: "https://github.com/jenifergs/ng-cash",
    image: ngCash
  }
];
export default projectsData;