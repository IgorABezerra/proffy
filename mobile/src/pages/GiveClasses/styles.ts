import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },

  button: {
    marginVertical: 40,
    height: 58,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04D361'
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 16,
  }
});

export default styles;
