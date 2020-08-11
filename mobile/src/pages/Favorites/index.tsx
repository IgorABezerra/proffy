import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { View, ScrollView } from 'react-native';
import styles from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    const loadFavorites = async () => {
      const response = await AsyncStorage.getItem('favorites');

      if(response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    };

    loadFavorites();
  });

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
        {favorites.map(
          (teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        )}
        {/* <TeacherItem teacher={} /> */}
      </ScrollView>
    </View>
  )
};

export default Favorites;
