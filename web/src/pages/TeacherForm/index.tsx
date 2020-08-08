import React, { useState, useCallback } from 'react';

import './styles.css';

import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';

import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/Textarea';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

interface ScheduledItem {
  week_day: number;
  from: string;
  to: string;
};

interface ClassData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [scheduledItems, setScheduledItems] = useState<ScheduledItem[]>([
    { week_day: 0, from: '', to: '' },
  ]);

  const handleCreateClass = useCallback(async ({
    name,
    avatar,
    bio,
    cost,
    subject,
    whatsapp
  }: ClassData) => {
    try {
      const createClassPayload = {
        name,
        avatar,
        bio,
        cost,
        subject,
        whatsapp,
        schedule: scheduledItems
      };

      await api.post('/classes', createClassPayload);

      history.push('/');
    } catch (err) {
      console.log(err);

      history.push('/');
    }
  }, [history, scheduledItems]);

  const handleAddNewScheduleItems = useCallback(() => {
    setScheduledItems([
      ...scheduledItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }, [scheduledItems]);

  const handleSetScheduledItemsDate = useCallback((position: number, field: string, value: string) => {
    const updatedScheduledItems = scheduledItems.map((scheduleItem, index) => {
      if(index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduledItems(updatedScheduledItems);
  }, [scheduledItems]);

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Form onSubmit={handleCreateClass} className="form-container" >
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="WhatsApp" name="whatsapp" />

          <TextArea label="Biográfia" name="bio"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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

          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis

            <button type="button" onClick={handleAddNewScheduleItems}>
              + Novo Horário
            </button>
          </legend>

          {scheduledItems.map((scheduleItem, index) => (
            <div className="schedule-item" key={scheduleItem.week_day}>
              <Select
                label="Dia da semana"
                name="week_day"
                value={scheduleItem.week_day}
                onChange={e => handleSetScheduledItemsDate(index, 'week_day', e.target.value)}
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

              <Input
                label="Das"
                name="from"
                value={scheduleItem.from}
                onChange={e => handleSetScheduledItemsDate(index, 'from', e.target.value)}
                type="time"
              />
              <Input
                label="Até"
                name="to"
                value={scheduleItem.to}
                onChange={e => handleSetScheduledItemsDate(index, 'to', e.target.value)}
                type="time"
              />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante <br />
            Preencha todos os dados
          </p>

          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
      </Form>
    </div>
  )
}

export default TeacherForm;
