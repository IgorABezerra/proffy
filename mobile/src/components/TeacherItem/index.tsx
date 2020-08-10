import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/IgorABezerra.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Igor Bezerra</Text>
          <Text style={styles.subject}>Filosofia</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        {'\n'}{'\n'}
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image
              // source={heartOutlineIcon}
              source={unfavoriteIcon}
            />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
};

export default TeacherItem;
