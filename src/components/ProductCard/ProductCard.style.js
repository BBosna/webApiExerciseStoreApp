import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4527a0',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  body_container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 16,
    color: 'lightgray',
    textAlign: 'right',
  },
});
