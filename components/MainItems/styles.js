import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      titles: {
        marginTop: '40%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 60,
        fontWeight: '600',
        fontFamily: 'sans-serif-medium'
      },
      subTitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      footer: {
        textAlign: 'center',
        color: 'white',
        marginTop: '180%',
        width: '100%',
        position: 'absolute',
        fontFamily: 'sans-serif-medium'
      },
      button: {
        marginTop: '40%',
      }
});

export default styles;