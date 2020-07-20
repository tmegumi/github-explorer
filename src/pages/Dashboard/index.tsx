import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="Teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="Teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="Teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
