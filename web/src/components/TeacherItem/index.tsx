import React, { useCallback } from 'react';

import './styles.css';
import whatsappImg from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemData {
  id: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
}

interface TeacherItemProps {
  teacher: TeacherItemData;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id
    });
  }, [teacher.id])

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Avatar do Professor"/>

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="blank"
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappImg} alt="Contato Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
