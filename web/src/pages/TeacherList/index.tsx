import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

interface SearchTeachersData {
  subject: string;
  week_day: string;
  time: string;
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers]  = useState([]);

  const handleSearchTeachers = useCallback(async ({
    subject,
    week_day,
    time
  }: SearchTeachersData) => {
    const { data } = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(data);
  }, []);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <Form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Artes', label: 'Artes' },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input label="Horário" name="time" type="time" />

          <button type="submit">
            Buscar
          </button>
        </Form>
      </PageHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem teacher={teacher}/>
        ))}
      </main>
    </div>
  )
}

export default TeacherList;
