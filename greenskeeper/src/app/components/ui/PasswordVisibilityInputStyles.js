import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    height: 50,
  },
  icon: {
    alignItems: 'flex-end',
    position: 'absolute'
  }
});

export default styles;