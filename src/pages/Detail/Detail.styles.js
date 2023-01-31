import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, marginTop: 10},
  image: {
    flex: 1,
    backgroundColor: 'white',
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  body_container: {padding: 10, flex: 1, alignItems: 'center'},
  title: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  desc: {fontStyle: 'italic'},
  price: {fontWeight: 'bold', fontSize: 22},
});
