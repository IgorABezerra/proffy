import React from 'react';

import './styles.css';
import whatsappImg from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/38634494?s=460&u=3867a8e6b70464aa362bd7a289e42d1202a1909b&v=4" alt="Avatar do Professor"/>

        <div>
          <strong>Igor Bezerra</strong>
          <span>Filosófia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat recusandae quod officiis dolores, explicabo porro hic veniam ullam reprehenderit blanditiis sit, placeat necessitatibus quidem? Saepe non nostrum dolore placeat voluptatum?
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ -20,00</strong>
        </p>

        <button type="button">
          <img src={whatsappImg} alt="Contato Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
