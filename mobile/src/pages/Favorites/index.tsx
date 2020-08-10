import React from 'react';

import PageHeader from '../../components/PageHeader';

import { View, ScrollView } from 'react-native';
import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>


      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
};

export default Favorites;
